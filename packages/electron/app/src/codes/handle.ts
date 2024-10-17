import { ipcMain } from "electron"
import { spawn } from 'child_process';
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
// eslint-disable-next-line import/no-unresolved
import { serveStatic } from '@hono/node-server/serve-static'

export async function staticServer() {
  const app = new Hono()

  app.use('/*', serveStatic({ root: './public' }))

  const port = 8000
  console.log(`Server is running on port ${port}`)

  serve({
    fetch: app.fetch,
    port
  }) 
}

export async function Handle() {
  ipcMain.handle('ping',  (_, p1)=>{
    console.log("params",p1)


    spawn("/usr/bin/google-chrome")
    return "hello"
  })   
}

