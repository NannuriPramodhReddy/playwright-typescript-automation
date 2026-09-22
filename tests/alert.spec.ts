import {test, expect} from '@playwright/test';

import {Alert} from '../page/alert';


test("Alert Handling", async ({page})=>{
    const alert = new Alert(page);
    await page.goto('https://testautomationpractice.blogspot.com/');

     page.on('dialog', async dialog => {
        console.log(dialog.type());
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
      });
      
    await alert.clickAlertButton();
    


})

test("Confirm Alert Handling", async ({page})=>{
    const alert = new Alert(page);
    await page.goto('https://testautomationpractice.blogspot.com/');
    
     page.on('dialog',async dialog =>{
        console.log(dialog.type());
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.dismiss();
      });
      
    await alert.clickConfirmButton();

     })

     test("Prompt Alert Handling", async ({page})=>{
        const alert = new Alert(page);
        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog',async dialog =>{
            console.log(dialog.type());
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept('Pramodh');
          });
          
        await alert.clickPromptButton();
            
        })
    