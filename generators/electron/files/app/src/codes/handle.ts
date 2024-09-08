import { ipcMain } from "electron"
import { spawn } from 'child_process';


export async function Handle() {
  ipcMain.handle('ping',  (_, p1)=>{
    console.log("params",p1)


    spawn("/usr/bin/google-chrome")
    return "hello"
  })   
}

