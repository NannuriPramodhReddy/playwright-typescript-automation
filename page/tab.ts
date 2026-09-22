import {Page,Locator} from '@playwright/test';

export class Tab {
    readonly newtab: Locator
    readonly popup: Locator
    
constructor(page:Page){
    this.newtab = page.getByRole('button', { name: 'New Tab' });
    this.popup =page.getByRole('button', { name: 'Popup Windows' });
}

async clickNewTab(){
    await this.newtab.click();
}
async clickPopup(){
    await this.popup.click();   

}
}