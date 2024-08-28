import {
    Command,
    PinionContext,
    commander,
    copyFiles,
    fromFile,
    prompt,
    toFile
  } from '@featherscloud/pinion'

  // A Context interface. (This one is empty)
interface Context extends PinionContext {
  name: string
}

const program = new Command()
  .description('A ts project generator')
  .option('-n, --name <name>', 'Name of your app')


  
  export function generate(init: PinionContext) {
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
        ).then( (context)=>{
            copyFiles(fromFile(__dirname, 'files/'), toFile(`./${context.name}`))
            }
        )
  }