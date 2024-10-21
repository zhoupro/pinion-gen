import { Page } from "puppeteer-core";
import { Res, stringMap } from "../type/base";
import { BasePlugin } from "./plugin";

export  abstract class BaseSpider{
    // 每个爬虫都有任务 ID
    _taskId:string;

    set taskId(tid:string){
        this._taskId = tid
    }

    get taskId(){
        return this._taskId;
    }

    // pluginList
    plugins: BasePlugin[];



    // 参数
    argv:stringMap;
    preData:Res;

    // 网页 page
    page:Page

    setPage(p:Page){
        this.page = p;
    }

    // 启动函数
    async beforeStart(){};
    // 启动函数
    async start(){
        for(let plugin of this.plugins){
            console.log(`${plugin.name} begin.`)
            let fetchRes = await  plugin.fetchData(this.preData)
            let proRes = await plugin.processData(fetchRes)
            console.log(proRes)
            this.preData = proRes
            console.log(`${plugin.name} end.`)
        }

        console.log("bbbb")
    };
    async afterStart(){};
    // 关闭函数
    async beforeTeardown(){};
    async teardown():Promise<void>{
        
        await this.page.close();
        await this.page.browser().close();
        console.log("here")
    };
    async afterTeardown(){};
    // 入口函数
    async main(){
        try{
            await this.beforeStart()
            await this.start()
            await this.afterStart()
        }catch(e){
            console.log(e)
        }finally{
            await this.beforeTeardown()
            await this.teardown()
            await this.afterTeardown()
        }
    }
}