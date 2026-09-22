import { expect, test } from '@playwright/test';
import { Fill } from '../page/fill';

test('Fill username', async ({ page }) => {
    const fill = new Fill(page);

    await page.goto('https://testautomationpractice.blogspot.com/');

    await fill.fillUsername('John Doe','john.doe@example.com');

    await expect(fill.username).toHaveValue('John Doe');
    await expect(fill.email).toHaveValue('john.doe@example.com');

    await fill.fillGender();
    await expect(fill.male).toBeChecked();
    
    await fill.fillDays();
    await expect(fill.days).toBeChecked();

    await fill.selectCountry();
    await expect(fill.selectIndia).toHaveValue('india');

    await fill.selectColor();
    await expect(fill.selectclass).toHaveValue('blue');

    await fill.fillDate();
    await expect(fill.datefiller1).toHaveValue('06/15/2023');

    await fill.uploadFile();
    await expect(fill.fileupload).toHaveValue(/Pramodh_Reddy_Resume.pdf$/);

    await fill.uploadMultipleFiles();
    await expect(fill.fileuploadmultiple).toHaveValue(/Pramodh_Reddy_Resume.pdf$/);

    if(await fill.dynamicbutton.textContent() === 'START') {
        await fill.clickDynamicButton();
        await expect(fill.dynamicbutton).toHaveText('STOP');
    } else {
        await fill.clickDynamicButton();
        await expect(fill.dynamicbutton).toHaveText('START');
    }
    
    await page.getByRole('button', { name: 'Point Me' }).hover();
    await page.getByRole('link', { name: 'Mobiles' }).click();
    

    await page.waitForTimeout(2000);

   // await page.screenshot({path: 'screenshot.png', fullPage: true});
    
    


});