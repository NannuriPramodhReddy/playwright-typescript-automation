import { Locator, Page } from '@playwright/test';

export class Fill {
    readonly username: Locator;
    readonly email: Locator;
    readonly male: Locator;
    readonly days: Locator;
    readonly selectIndia: Locator;
    readonly selectclass: Locator;
    readonly datefiller1:Locator;
    readonly fileupload: Locator;
    readonly fileuploadmultiple: Locator;
    readonly dynamicbutton: Locator;
  

    constructor(page: Page) {
        this.username = page.getByPlaceholder('Enter Name');
        this.email = page.getByPlaceholder('Enter Email');
        this.male = page.getByLabel('Male',{exact: true});
        this.days = page.getByLabel('sunday');
        this.selectIndia = page.locator('select#country');
        this.selectclass = page.locator('select#colors');
        this.datefiller1 = page.locator('input#datepicker');
        this.fileupload = page.locator('#singleFileInput')
        this.fileuploadmultiple = page.locator('#multipleFilesInput')
        this.dynamicbutton =  page.getByRole('button', { name: /START|STOP/ });;

    
    }

    async fillUsername(name: string , email: string) {
        await this.username.fill(name);
        await this.email.fill(email);

    }
    async fillGender() {
        await this.male.check();
    }
    async fillDays() {
        await this.days.check();
    }
    async selectCountry() {
        await this.selectIndia.selectOption('India');
    }
    async selectColor() {
        await this.selectclass.selectOption('Blue');
    }   
    async fillDate() {
        await this.datefiller1.fill('06/15/2023');
    }
    
// async uploadFile() {
//     await this.fileupload.setInputFiles('/Users/pramodh/Downloads/Pramodh_Reddy_Resume.pdf');


// }

// async uploadMultipleFiles() {
//     await this.fileuploadmultiple.setInputFiles([
//         '/Users/pramodh/Downloads/Pramodh_Reddy_Resume.pdf',
//         '/Users/pramodh/Downloads/resume-68479fce-d6a1-43ae-a77f-7f7ec3fdb127.pdf'
//     ]);

// }
async clickDynamicButton() {
    await this.dynamicbutton.click();
}
}