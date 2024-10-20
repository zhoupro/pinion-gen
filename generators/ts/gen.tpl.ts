import {
    Command,
    PinionContext,
    commander,
    copyFiles,
    copyFilesWithIgnoreFileList,
    fromFile,
    prompt,
    renderTemplate,
    toFile
  } from '@featherscloud/pinion'
  import path from 'path'

import { Eta } from "eta"
import {  getPathLastName, getRootPackagesPath } from '../../utils/path';

  // A Context interface. (This one is empty)
interface Context extends PinionContext {
  name: string
}

const program = new Command()
  .description('A ts project generator')
  .option('-n, --name <name>', 'Name of your app')



function packageEta(ctx:Context) {
  let packagePath = getRootPackagesPath() 
  let parentPath = getPathLastName(__dirname)
  const eta = new Eta({ views: `${packagePath}/${parentPath}` });
  const res = eta.render("./package.json",ctx);
  return res;
}
  
  export function generate(init: Context) {
     let packagePath = getRootPackagesPath() 
     let parentPath = getPathLastName(__dirname)
     return Promise.resolve(init)
        .then(commander(program))
        .then(
            prompt((context) => {
            // Only ask question if `name` or `description` are not passed
            return {
                name: {
                type: 'input',
                message: 'What is the name of your app?',
                when: !context.name
                },
            }
            })
        ).then( 
              copyFilesWithIgnoreFileList(fromFile(packagePath, parentPath), toFile('./gen_demo'),{force:true,ignoreList:[".gitignore"]})
              // const eta = new Eta({ views: __dirname });
              // const packageText = eta.render("./files/package.json",context);
              //renderTemplate(packageText, toFile('package.json'))
        ).
        then(renderTemplate(packageEta, toFile('./gen_demo/package.json'),{force:true}))
  }