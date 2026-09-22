import { Page, Locator } from '@playwright/test';

export class Table {
    readonly bookTable: Locator;

    constructor(page: Page) {
        this.bookTable = page.locator('table[name="BookTable"]');
    }

    async getTableData() {
        const rows = this.bookTable.locator('tr');
        const rowCount = await rows.count();

        console.log(`Number of rows: ${rowCount}`);
    }

    async totalprice() {
        let totalPrice = 0;

        const rows = this.bookTable.locator('tbody tr');
        const rawdata = await rows.all();

        for (const row of rawdata.slice(1)) {
            const cell = await row.locator('td').allInnerTexts();

            const price = parseInt(cell[3]);

            totalPrice += price;
        }

        console.log(`Total Price: ${totalPrice}`);

        return totalPrice;
    }
}