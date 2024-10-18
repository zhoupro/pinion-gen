import { Command,  prompt,
  commander, PinionContext, renderTemplate, toFile } from '@featherscloud/pinion'
import { Eta } from "eta"

// A Context interface. (This one is empty)
interface Context extends PinionContext {
  name: string
  description: string
  ch: string[]
}

// The file content as a template string
function readmeEta(ctx:Context) {
  const eta = new Eta({ views: __dirname });
  const res = eta.render("./tpl/hello.eta",ctx);
  return res;
}



const program = new Command()
  .description('A readme generator')
  .option('-n, --name <name>', 'Name of your app')
  .option('-d, --description <description>', 'The description for your app')
  .option('-c, --ch [ch...]', 'ch')

// A `generate` export that wraps the context and renders the template
export async function  generate(init: Context) {
  return Promise.resolve(init)
  .then(commander(program))
  .then(
    prompt((context) => {
      // Only ask question if `name` or `description` are not passed
      return {
        name: {
          type: 'input',
          message: 'What is the name of your debug?',
          when: !context.name
        },
        
      }
    })
  )
  .then(renderTemplate(readmeEta, toFile('test.json')))
}