// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('versions', {
  ping: (p1:string) => ipcRenderer.invoke('ping',p1)
  // we can also expose variables, not just functions
})
