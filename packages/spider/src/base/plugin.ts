import {  Req, Res } from "../type/base";
import { BaseSpider } from "./spider";

export  abstract class BasePlugin {
    name:string;
    bs:BaseSpider;
    setSpider(sp:BaseSpider){
        this.bs = sp;
    }

    async fetchData( preRes:Res):Promise<Res>{
        return Promise.resolve(preRes) 
    }

    async processData(input:Req):Promise<Res>{
        return Promise.resolve(input) 
    }
}