import { BrowserWindow, BrowserView, ipcMain, shell } from 'electron'
import * as path from 'path'
import { platform, is } from '@electron-toolkit/utils'

export function createMicroAppWindow(url: string): void {
  // Create the browser window.
  const win = new BrowserWindow({
    backgroundColor: '#FFFFFF',
    width: 380,
    height: 640,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    autoHideMenuBar: true,
    frame: false,
    show: false,
    titleBarStyle: 'hidden',
    ...(platform.isLinux
      ? {
          icon: path.join(__dirname, '../../build/icon.png')
        }
      : {}),
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      spellcheck: false,
      webviewTag: false
    }
  })

  win.on('ready-to-show', () => {
    // Not show the traffic light buttons in MacOS
    if (platform.isMacOS) win.setWindowButtonVisibility(false)
    win.show()
  })

  win.webContents.on('dom-ready', () => {
    // win.webContents.openDevTools({ mode: 'undocked' })
    createView(win, url)
  })

  win.on('close', () => {
    const views = win.getBrowserViews()
    views.forEach((v) => win.removeBrowserView(v))
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    win.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

const createView = (hostWin: BrowserWindow, url: string): void => {
  const view = new BrowserView({
    webPreferences: {
      backgroundThrottling: false,
      v8CacheOptions: 'none',
      preload: path.join(__dirname, '../preload/view.js')
    }
  })
  hostWin.focus()
  hostWin.setBrowserView(view)
  view.setBounds({ x: 0, y: 45, width: 380, height: 595 })
  view.webContents.loadURL(url)
  view.webContents.on('dom-ready', () => {
    // view.webContents.openDevTools({ mode: 'undocked' })
    view.webContents.focus()
    // Mobile emulation
    view.webContents.enableDeviceEmulation({
      screenPosition: 'mobile',
      screenSize: { width: 380, height: 595 },
      viewPosition: { x: 0, y: 0 },
      viewSize: { width: 380, height: 595 },
      scale: 1,
      deviceScaleFactor: 0
    })
  })

  view.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // track view navigate in page
  view.webContents.on('did-navigate-in-page', () => {
    if (hostWin) {
      hostWin.webContents.send('app:can-go-back', view.webContents.canGoBack())
    }
  })

  ipcMain.on('micro-app:go-back', async (event) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    if (win) {
      const view = win.getBrowserViews()[0]
      view?.webContents.goBack()
    }
  })

  ipcMain.on('app:change-theme-color', async (_, color) => {
    let css = ''
    if (color) {
      css = `body { --theme-color: ${color}; --tb-opr-color: #fff; --tb-opr-border-color: transparent; --tb-opr-hover-color: #9b9b9b; --tb-opr-bg-color: rgba(0, 0, 0, 0.3)};`
    } else {
      css = `body { --theme-color: #fff; --tb-opr-color: #9b9b9b; --tb-opr-border-color: #eee; --tb-opr-hover-color: #333; --tb-opr-bg-color:transparent};`
    }
    hostWin.webContents.insertCSS(css)
  })
}
