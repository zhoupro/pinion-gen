import { BaseSpider } from "../base/spider";

export class DemoSpider extends BaseSpider{

    async afterStart() {
        console.log("custom func")
        
    }

}

