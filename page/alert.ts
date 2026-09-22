import {Page,Locator} from '@playwright/test';


export class Alert {
    readonly alertbutton: Locator
    readonly confirmbutton: Locator
    readonly promptbutton: Locator

    constructor(page:Page){
        this.alertbutton =page.getByRole('button', { name: 'Simple Alert' });
        this.confirmbutton = page.getByRole('button', { name: 'Confirmation Alert' });
        this.promptbutton = page.getByRole('button', { name: 'Prompt Alert' });
    }
    
    async clickAlertButton(){
        await this.alertbutton.click();
    }
    async clickConfirmButton(){
        await this.confirmbutton.click();
    }
    async clickPromptButton(){
        await this.promptbutton.click();
    }
}