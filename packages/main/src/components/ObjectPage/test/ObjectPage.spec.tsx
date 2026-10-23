import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

// Poll until scrollTop has moved and gone stable, so we assert the final selection and not the tab lock held mid-scroll.
async function waitForScrollSettled(page: Page) {
  await page.evaluate(() => ((window as unknown as { __opScroll: number[] }).__opScroll = []));
  await page.waitForFunction(
    () => {
      const op = document.querySelector('[data-component-name="ObjectPage"]');
      if (!op) {
        return false;
      }
      const hist = (window as unknown as { __opScroll: number[] }).__opScroll;
      hist.push(op.scrollTop);
      const moved = hist.some((value) => value > 0);
      const count = hist.length;
      return moved && count >= 2 && Math.abs(hist[count - 1] - hist[count - 2]) <= 1;
    },
    undefined,
    { polling: 100 },
  );
}

test.describe('ObjectPage', () => {
  test('selects last section with long header', async ({ mount, page }) => {
    await page.setViewportSize({ width: 950, height: 800 });
    await mount('ObjectPage/ObjectPageLongHeaderTestComp');

    await page.getByRole('tab', { name: 'Employment' }).click();
    await waitForScrollSettled(page);

    const geo = await page.evaluate(() => {
      const op = document.querySelector('[data-component-name="ObjectPage"]');
      const tabs = document.querySelector('[data-component-name="ObjectPageTabContainer"]');
      const opTop = op.getBoundingClientRect().top;
      const rect = (id: string) => document.getElementById(id).getBoundingClientRect();
      return {
        stickyBottom: tabs.getBoundingClientRect().bottom - opTop,
        employmentTop: rect('ObjectPageSection-employment').top - opTop,
        personalBottom: rect('ObjectPageSection-personal').bottom - opTop,
      };
    });

    // Employment scrolled to just under the sticky header, Personal scrolled above it (out of the selection zone)
    expect(Math.abs(geo.employmentTop - geo.stickyBottom)).toBeLessThanOrEqual(4);
    expect(geo.personalBottom).toBeLessThanOrEqual(geo.stickyBottom);
    await expect(page.locator('[data-section-id="employment"]')).toHaveAttribute('selected');
  });

  test('fitContent: switching tabs while the header is collapsed leaves no gap above the content', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount('ObjectPage/ObjectPageFitContentTabSwitchTestComp');

    // height of the top spacer that pads the content down to make room for a re-expandable collapsed header
    const topSpacerHeight = () =>
      page.evaluate(() => {
        const spacer = document.querySelector('[data-component-name="ObjectPageContent"]')
          ?.firstElementChild as HTMLElement | null;
        return spacer ? Math.round(spacer.getBoundingClientRect().height) : -1;
      });

    // collapse the header via the toggle button
    await page.locator('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    await expect(page.getByText('Header content')).toBeHidden();

    // switching to another fitContent section must not reintroduce the top spacer (the gap)
    await page.getByRole('tab', { name: 'Fit 2' }).click();
    await expect(page.getByText('Header content')).toBeHidden();
    await expect.poll(topSpacerHeight).toBe(0);

    // a non-fitContent section keeps the spacer so scrolling up can re-expand the collapsed header
    await page.getByRole('tab', { name: 'Normal' }).click();
    await expect.poll(topSpacerHeight).toBeGreaterThan(0);
  });

  test('non-fitContent: collapsed header + switch to a short section leaves no dead spacer above it', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount('ObjectPage/ObjectPageShortSectionTabSwitchTestComp');

    // height of the top spacer that pads the content down to make room for a re-expandable collapsed header
    const topSpacerHeight = () =>
      page.evaluate(() => {
        const spacer = document.querySelector('[data-component-name="ObjectPageContent"]')
          ?.firstElementChild as HTMLElement | null;
        return spacer ? Math.round(spacer.getBoundingClientRect().height) : -1;
      });

    // how far the top spacer is scrolled out of view (>= its height means no gap is visible above the content)
    const spacerScrolledOutBy = () =>
      page.evaluate(() => {
        const op = document.querySelector('[data-component-name="ObjectPage"]');
        const spacer = document.querySelector('[data-component-name="ObjectPageContent"]')
          ?.firstElementChild as HTMLElement | null;
        if (!op || !spacer) {
          return -1;
        }
        return Math.round(op.scrollTop) - Math.round(spacer.getBoundingClientRect().height);
      });

    // collapse the header via the toggle button
    await page.locator('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    await expect(page.getByText('Header content')).toBeHidden();

    // a section too short to scroll must not keep the top spacer (it would be un-scrollable dead space)
    await page.getByRole('tab', { name: 'Short' }).click();
    await expect(page.getByText('Header content')).toBeHidden();
    await expect.poll(topSpacerHeight).toBe(0);

    // a tall section keeps the spacer (so scroll-up can re-expand the header) but lands scrolled past it, leaving no gap
    await page.getByRole('tab', { name: 'Tall' }).click();
    await expect(page.getByText('Header content')).toBeHidden();
    await expect.poll(topSpacerHeight).toBeGreaterThan(0);
    await expect.poll(spacerScrolledOutBy).toBeGreaterThanOrEqual(0);

    // scrolling back up re-expands the collapsed header
    await page.locator('[data-component-name="ObjectPage"]').evaluate((op) => op.scrollTo({ top: 0 }));
    await expect(page.getByText('Header content')).toBeVisible();

    // switching back to the short section drops the spacer again
    await page.getByRole('tab', { name: 'Short' }).click();
    await expect.poll(topSpacerHeight).toBe(0);
  });

  test('uses titleText as the accessible name and respects explicit names', async ({ mount, page }) => {
    await mount('ObjectPage/ObjectPageAccessibleNameTestComp');

    const automaticSection = page.getByRole('region', { name: 'Automatic section' });
    const automaticSubsection = page.getByRole('region', { name: 'Automatic subsection' });

    await expect(automaticSection).toHaveAttribute('aria-label', 'Automatic section');
    await expect(automaticSubsection).toHaveAttribute('aria-label', 'Automatic subsection');

    await expect(page.getByRole('region', { name: 'Custom section label' })).toHaveAttribute(
      'aria-label',
      'Custom section label',
    );
    await expect(page.getByRole('region', { name: 'External section label' })).toHaveAttribute(
      'aria-labelledby',
      'external-section-label',
    );
  });

  test('keeps only a single section out of the tab order', async ({ mount, page }) => {
    await mount('ObjectPage/ObjectPageSingleSectionTestComp');

    const section = page.getByRole('region', { name: 'Single section' });
    const firstSubSection = page.getByRole('region', { name: 'First subsection' });
    const secondSubSection = page.getByRole('region', { name: 'Second subsection' });

    expect(await section.getAttribute('tabindex')).toBeNull();
    await expect(section).toHaveAttribute('aria-label', 'Single section');
    await expect(firstSubSection).toHaveAttribute('tabindex', '0');
    await expect(page.locator('[data-component-name="ObjectPageTabContainer"]')).toHaveCount(0);

    await firstSubSection.focus();
    await page.keyboard.press('ArrowDown');
    await expect(secondSubSection).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'After ObjectPage' })).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(secondSubSection).toBeFocused();
    expect(await section.getAttribute('tabindex')).toBeNull();

    await mount('ObjectPage/ObjectPageSingleSectionIconTabBarTestComp');
    expect(await page.getByRole('region', { name: 'Single section' }).getAttribute('tabindex')).toBeNull();
    await expect(page.locator('[data-component-name="ObjectPageTabContainer"]')).toHaveCount(0);

    await mount('ObjectPage/ObjectPageFitContentTabSwitchTestComp');
    await expect(page.getByRole('region', { name: 'Fit 1' })).toHaveAttribute('tabindex', '0');
    await expect(page.locator('[data-component-name="ObjectPageTabContainer"]').first()).toBeVisible();
  });
});
