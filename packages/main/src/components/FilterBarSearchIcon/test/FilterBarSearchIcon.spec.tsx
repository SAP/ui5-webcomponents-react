import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

test.describe('FilterBarSearchIcon', () => {
  test('triggers the search handler when the icon is activated', async ({ mount, page, ui5wc }) => {
    await mount('FilterBarSearchIcon/FilterBarSearchIconTestComp');

    const searchInput = page.locator('[ui5-input]').first();
    await expect(searchInput).toBeVisible();
    await ui5wc.typeIntoInput(searchInput, 'quarterly report');

    await expect(page.getByTestId('search-click-count')).toHaveText('0');

    await page.locator('[ui5-input-icon][slot="icon"]').click();

    await expect(page.getByTestId('search-click-count')).toHaveText('1');
    await expect(page.getByTestId('submitted-term')).toHaveText('quarterly report');
  });
});
