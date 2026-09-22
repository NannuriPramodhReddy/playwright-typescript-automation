import { test, expect } from '@playwright/test';
import { Table } from '../page/table';

test('Verify table data', async ({ page }) => {
    const table = new Table(page);

    await page.goto('https://testautomationpractice.blogspot.com/');

    await table.getTableData();

    await expect(table.bookTable.locator('tr')).toHaveCount(7);

    const total = await table.totalprice();

    expect(total).toBe(7100);

    
});