const puppeteer=require('puppeteer');
const commonUrl=require('./commonUrl');

module.exports.fetMainCategories=async(url,callback)=>{
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.addScriptTag({url:'https://code.jquery.com/jquery-3.2.1.min.js'});
    const result=await page.evaluate((commonUrl)=>{
        const amazonData={
            categories:[]
        }
        $('.nav-search-dropdown').children().each(function(){
            let obj={
                text:$(this).text(),
                textLink:commonUrl.mainCatUrlInitial + ($(this).attr('value')).replace("#","%3D")
                                                     + commonUrl.mainCatUrlLast
            }
            amazonData.categories.push(obj);
        });
        return amazonData;
    },commonUrl)
    await page.close();
    await browser.close();
    callback(result,true);
}