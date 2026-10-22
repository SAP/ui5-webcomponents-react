import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import type { DisableableHook, DisableHooksHarness } from './PluginHooks.gallery.js';

const STORY = 'PluginHooks/DisableHooksHarness';

const columnHeader = (page: Page, id: string) => page.locator(`[data-column-id="${id}"]`);
const toggle = (page: Page) => page.getByTestId('toggle-disabled');

const firstHeaderColumn = (page: Page) =>
  page.locator('[data-component-name="AnalyticalTableHeaderRow"] [data-column-id]').first();

async function dragFirstResizer(page: Page) {
  const resizer = page.locator('[data-component-name="AnalyticalTableResizer"]').first();
  await resizer.scrollIntoViewIfNeeded();
  const box = await resizer.boundingBox();
  if (!box) {
    throw new Error('resizer not found');
  }
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx + 60, cy, { steps: 8 });
  await page.mouse.up();
}

test.describe('AnalyticalTable plugin hooks — disabled flag', () => {
  test('useStickyColumns: disabling unpins the seeded column; re-enabling re-pins it', async ({ mount, page }) => {
    // Seeding (`sticky: 'start'`) happens at mount, so start enabled, then toggle off and on.
    await mount<typeof DisableHooksHarness>(STORY, { hook: 'useStickyColumns' });
    await expect(columnHeader(page, 'name')).toBeVisible();
    await expect(page.locator('[data-sticky-start]').first()).toBeAttached();

    await toggle(page).click();
    await expect(page.locator('[data-sticky-start]')).toHaveCount(0);

    await toggle(page).click();
    await expect(page.locator('[data-sticky-start]').first()).toBeAttached();
  });

  test('useStickyColumns: disabling restores the natural order of a hoisted non-first column', async ({
    mount,
    page,
  }) => {
    await mount<typeof DisableHooksHarness>(STORY, { hook: 'useStickyColumns' });
    await expect(firstHeaderColumn(page)).toHaveAttribute('data-column-id', 'note');

    await toggle(page).click();
    await expect(firstHeaderColumn(page)).toHaveAttribute('data-column-id', 'name');

    await toggle(page).click();
    await expect(firstHeaderColumn(page)).toHaveAttribute('data-column-id', 'note');
  });

  test('useManualRowSelect: disabled selects no row; enabling applies the data selection', async ({ mount, page }) => {
    // Selected cells carry `aria-selected`; the first data row (`isSelected: true`) has selected gridcells.
    // Disabling only stops the hook from *applying* the data selection — it does not clear an existing one.
    const selectedCells = page.locator('[role="gridcell"][aria-selected="true"]');
    await mount<typeof DisableHooksHarness>(STORY, { hook: 'useManualRowSelect', disabled: true });
    await expect(page.getByText('Peter')).toBeVisible();
    await expect(selectedCells).toHaveCount(0);

    await toggle(page).click();
    await expect(selectedCells.first()).toBeVisible();
  });

  test('useRowDisableSelection: disabled leaves all rows selectable; toggling disables blocked rows', async ({
    mount,
    page,
  }) => {
    // Blocked rows get their selection cell marked `aria-disabled`.
    const disabledSelectionCells = page.locator('[role="gridcell"][aria-disabled="true"]');
    await mount<typeof DisableHooksHarness>(STORY, { hook: 'useRowDisableSelection', disabled: true });
    await expect(page.getByText('Peter')).toBeVisible();
    await expect(disabledSelectionCells).toHaveCount(0);

    await toggle(page).click();
    // two rows carry `blocked: true` → two disabled selection cells
    await expect(disabledSelectionCells).toHaveCount(2);

    await toggle(page).click();
    await expect(disabledSelectionCells).toHaveCount(0);
  });

  test('useOnColumnResize: disabled suppresses the callback; toggling re-enables it', async ({ mount, page }) => {
    await mount<typeof DisableHooksHarness>(STORY, { hook: 'useOnColumnResize', disabled: true });
    await expect(columnHeader(page, 'name')).toBeVisible();

    await dragFirstResizer(page);
    await expect(page.getByTestId('resize-count')).toHaveText('0');

    await toggle(page).click();
    await dragFirstResizer(page);
    await expect(page.getByTestId('resize-count')).toHaveText('1');
  });

  test('useAnnounceEmptyCells: disabled omits the empty-cell description; toggling adds it', async ({
    mount,
    page,
  }) => {
    await mount<typeof DisableHooksHarness>(STORY, { hook: 'useAnnounceEmptyCells', disabled: true });
    const emptyCell = page.locator('[data-column-id-cell="note"]').first();
    await expect(emptyCell).toBeVisible();
    const disabledLabelledBy = (await emptyCell.getAttribute('aria-labelledby')) ?? '';

    await toggle(page).click();
    await expect
      .poll(async () => ((await emptyCell.getAttribute('aria-labelledby')) ?? '').split(/\s+/).filter(Boolean).length)
      .toBe(disabledLabelledBy.split(/\s+/).filter(Boolean).length + 1);
  });

  test('useF2CellEdit: disabled omits the F2 table description; toggling adds it', async ({ mount, page }) => {
    await mount<typeof DisableHooksHarness>(STORY, { hook: 'useF2CellEdit', disabled: true });
    const grid = page.getByRole('grid');
    await expect(grid).toBeVisible();
    const disabledDescription = await grid.getAttribute('aria-description');

    await toggle(page).click();
    await expect.poll(async () => grid.getAttribute('aria-description')).not.toBe(disabledDescription);
    expect(await grid.getAttribute('aria-description')).toBeTruthy();
  });

  // The core rules-of-hooks guarantee: flipping `disabled` on a mounted table (re-creating the hook at the same
  // `tableHooks` index) must not change the hook count/order, so React never throws "rendered more/fewer hooks".
  const allHooks: DisableableHook[] = [
    'useStickyColumns',
    'useManualRowSelect',
    'useRowDisableSelection',
    'useIndeterminateRowSelection',
    'useOnColumnResize',
    'useAnnounceEmptyCells',
    'useF2CellEdit',
    'useOrderedMultiSort',
  ];

  for (const hook of allHooks) {
    test(`${hook}: toggling disabled at runtime does not crash the table`, async ({ mount, page }) => {
      const errors: string[] = [];
      page.on('pageerror', (err) => errors.push(err.message));

      await mount<typeof DisableHooksHarness>(STORY, { hook });
      await expect(columnHeader(page, 'name')).toBeVisible();

      await toggle(page).click();
      await expect(page.getByTestId('disabled-state')).toHaveText('true');
      await expect(columnHeader(page, 'name')).toBeVisible();

      await toggle(page).click();
      await expect(page.getByTestId('disabled-state')).toHaveText('false');
      await expect(columnHeader(page, 'name')).toBeVisible();

      expect(errors).toEqual([]);
    });
  }
});
