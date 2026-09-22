import {test , expect} from '@playwright/test';


import {Tab} from '../page/tab';

test("Tab Handling", async ({context})=>{
    const page = await context.newPage();
    const tab = new Tab(page);
    await page.goto('https://testautomationpractice.blogspot.com/');

    const [newPage] = await Promise.all([context.waitForEvent('page'),tab.clickNewTab()]);
   
    await expect(newPage).toHaveURL('https://www.pavantestingtools.com/');
})


test("Popup Handling", async ({context})=>{
    const page = await context.newPage();
    const tab = new Tab(page);
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const[popupPage]= await Promise.all([context.waitForEvent('page'),
        tab.clickPopup()
    ]);
   
    console.log((await context.pages()).length);
    const pages = context.pages();
    console.log( await pages[0].title());
   console.log(await pages[1].title());
})