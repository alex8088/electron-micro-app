import { contextBridge, ipcRenderer } from 'electron'

const api = {
  changeThemeColor: (color: string): void => {
    ipcRenderer.send('app:change-theme-color', color)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('app', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.app = api
}
