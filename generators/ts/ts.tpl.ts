import {
    Command,
    PinionContext,
    commander,
    copyFiles,
    fromFile,
    prompt,
    renderTemplate,
    toFile
  } from '@featherscloud/pinion'

import { Eta } from "eta"

  // A Context interface. (This one is empty)
interface Context extends PinionContext {
  name: string
}

const program = new Command()
  .description('A ts project generator')
  .option('-n, --name <name>', 'Name of your app')



function packageEta(ctx:Context) {
  const eta = new Eta({ views: __dirname });
  const res = eta.render("./files/package.json",ctx);
  return res;
}
  
  export function generate(init: Context) {
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
              copyFiles(fromFile(__dirname, 'files'), toFile('./'),{force:true})
              // const eta = new Eta({ views: __dirname });
              // const packageText = eta.render("./files/package.json",context);
              //renderTemplate(packageText, toFile('package.json'))
        ).
        then(renderTemplate(packageEta, toFile('package.json'),{force:true}))
  }