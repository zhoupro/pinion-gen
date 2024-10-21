import { BasePlugin } from "../base/plugin";
import { Req, Res } from "../type/base";

export class DemoPlugin2 extends BasePlugin{
    name: string ="demo";
    fetchData( preRes:Res):Promise<Res>{
        console.log(this)
        return Promise.resolve({...preRes,"hello2":134})   
    }

}