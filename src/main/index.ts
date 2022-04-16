import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import { optimizer, is } from '@electron-toolkit/utils'

import { createMicroAppWindow } from './micro-app'

function createWindow(): void {
  let url = ''
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    url = `${process.env['ELECTRON_RENDERER_URL']}/view.html`
  } else {
    url = path.join(__dirname, '../renderer/view.html')
  }

  createMicroAppWindow(url)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // If use a frameless window which hide the system's native window
  // controls, we may need to create custom window controls in HTML.
  //
  // The frameless window ipc allow the renderer process to control
  // the browser window.
  //
  // The ipc channel named win:invoke.
  //
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  optimizer.registerFramelessWindowIpc()

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
