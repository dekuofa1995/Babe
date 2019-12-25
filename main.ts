// @ts-ignore
import { app, BrowserWindow } from 'electron'
import * as os from 'os'
import * as path from 'path'

let mainWindow: BrowserWindow
let extensionPath = '/Library/Application Support/Google/Chrome/Default/Extensions'
let extensions = [
  { id: 'fmkadmapgofadopljbjfkapdkoienihi', name: 'React Developer Tools', version: '4.2.1_0', enable: true },
  { id: 'lmhkpmbekcpmknklioeibfkpmmfibljd', name: 'Redux DevTools', version: '2.17.0_0', enable: false },
]
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadURL('http://localhost:8080/index.html')
  // mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));

  // react dev tools
  extensions.forEach(e => {
    e.enable && BrowserWindow.addDevToolsExtension(path.join(os.homedir(), extensionPath, e.id, e.version))
  })
  // open dev tools
  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.openDevTools()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
