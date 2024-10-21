import { getPage } from "../launch/launch";
import { DemoPlugin } from "../plugin/demo";
import { DemoPlugin2 } from "../plugin/demo2";
import { DemoSpider } from "../spider/demo";

let ds = new DemoSpider()
let page = await getPage()
ds.setPage(page)
let pl1 = new DemoPlugin()
pl1.setSpider(ds)

let pl2 = new DemoPlugin2()
pl2.setSpider(ds)


ds.plugins = [pl1, pl2]
await ds.main()