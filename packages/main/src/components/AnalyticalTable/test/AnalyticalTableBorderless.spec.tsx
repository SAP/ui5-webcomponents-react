import type { Locator } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';
import type { BorderlessHarness } from './AnalyticalTable.gallery.js';

const STORY = 'AnalyticalTable/BorderlessHarness';

const container = (scope: Locator) => scope.locator('[data-component-name="AnalyticalTableContainer"]');
const afterDisplay = (scope: Locator) => container(scope).evaluate((el) => getComputedStyle(el, '::after').display);
// "Age" is a middle column, so its body cell always has the inter-column divider (border-inline-end).
const cellDivider = (scope: Locator) =>
  scope
    .locator('[data-column-id-cell="age"]')
    .first()
    .evaluate((el) => getComputedStyle(el).borderInlineEndStyle);

// Two documented, class-based recipes, each asserted against the untouched baseline so the test can't pass on a
// no-op: `at-borderless-container` removes only the outer frame (keeping cell borders); `at-no-vertical-cell-borders`
// removes only the inter-column dividers (keeping the frame).
test.describe('AnalyticalTable borderless recipes', () => {
  test('borderless container removes the outer ::after line but keeps cell dividers', async ({ mount, page }) => {
    await mount<typeof BorderlessHarness>(STORY);
    await expect(page.getByText('Name-0').first()).toBeVisible();

    expect(await afterDisplay(page.getByTestId('outer'))).toBe('none');
    expect(await afterDisplay(page.getByTestId('default'))).not.toBe('none');
    // cell dividers must stay
    expect(await cellDivider(page.getByTestId('outer'))).toBe('solid');
  });

  test('no-vertical-cell-borders removes the dividers but keeps the outer frame', async ({ mount, page }) => {
    await mount<typeof BorderlessHarness>(STORY);
    await expect(page.getByText('Name-0').first()).toBeVisible();

    expect(await cellDivider(page.getByTestId('vertical'))).toBe('none');
    expect(await cellDivider(page.getByTestId('default'))).toBe('solid');
    // the outer frame must stay
    expect(await afterDisplay(page.getByTestId('vertical'))).not.toBe('none');
  });

  test('the outer-border custom properties the recipe relies on still resolve to "none" in Horizon', async ({
    mount,
    page,
  }) => {
    await mount<typeof BorderlessHarness>(STORY);
    await expect(page.getByText('Name-0').first()).toBeVisible();

    // Read the theme-provided values off the untouched baseline (not the recipe), so this breaks if the vars are
    // renamed/removed (getPropertyValue → '') or if Horizon stops defaulting them to `none`.
    const vars = await container(page.getByTestId('default')).evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        block: cs.getPropertyValue('--_ui5wcr-AnalyticalTable-OuterBorderBlock').trim(),
        inline: cs.getPropertyValue('--_ui5wcr-AnalyticalTable-OuterBorderInline').trim(),
      };
    });
    expect(vars.block).toBe('none');
    expect(vars.inline).toBe('none');
  });

  test('borderless container makes the vertical scrollbar bottom border transparent', async ({ mount, page }) => {
    await mount<typeof BorderlessHarness>(STORY);
    await expect(page.getByText('Name-0').first()).toBeVisible();

    const scrollbar = page.getByTestId('outer').locator('[data-component-name="AnalyticalTableVerticalScrollbar"]');
    // The custom scrollbar only renders with native (non-overlay) scrollbars; skip the assertion otherwise.
    if ((await scrollbar.count()) === 0) {
      test.skip(true, 'custom vertical scrollbar not rendered (overlay scrollbars)');
    }
    const color = await scrollbar.evaluate((el) => getComputedStyle(el).borderBlockEndColor);
    expect(color).toBe('rgba(0, 0, 0, 0)');
  });
});
