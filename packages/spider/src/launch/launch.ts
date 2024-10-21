import puppeteer from "puppeteer-core";

// @ts-ignore
import { getChromiumPath } from "browser-paths"; 
async function getPage(){
    let path:string = getChromiumPath()
    console.log(path)
    const browser = await puppeteer.launch(
        {
            executablePath:path,
            headless:false,
        }
    );
    const page = await browser.newPage();
    return page
}


export {
    getPage
}