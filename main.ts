// @ts-ignore
import { app, BrowserWindow } from 'electron'
import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'
import { Menubar, menubar } from 'menubar'

interface Extension {
  id: string
  name: string
  version?: string
  path?: string
  enable: boolean
}

const mb: Menubar = menubar({
  preloadWindow: true,
  index: 'http://localhost:8080/index.html', // if use local file, use file://...
  browserWindow: { webPreferences: { nodeIntegration: true } }, // 集成 node.js fix require is not defined error
})
const extensionPath = '/Library/Application Support/Google/Chrome/Default/Extensions'
const extensions: Array<Extension> = [
  {
    id: 'fmkadmapgofadopljbjfkapdkoienihi',
    name: 'React Developer Tools',
    enable: true,
  },
  {
    id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
    name: 'Redux DevTools',
    enable: true,
  },
]

const loadDevTool = (parentPath: string, extensions: Array<Extension>) => {
  const exists = extensions
    .filter((value) => value.enable)
    .map((e) => {
      const extensionPath = path.join(os.homedir(), parentPath, e.id),
        versionDir = fs
          .readdirSync(extensionPath, { withFileTypes: true })
          .find((_) => _.isDirectory())

      if (!versionDir) {
        console.warn('can not found devtool: %s, please check', extensionPath)
        return
      }
      e.version = versionDir.name
      e.path = path.join(extensionPath, e.version)
      return e
    })
  const installs = BrowserWindow.getDevToolsExtensions()

  exists.forEach((extension) => {
    const installed = installs[extension.name]
    if (!!installed) {
      if (installed.version === extension.version) return
      // do replace use exist version
      console.log('remove extension: %s', extension.name)
      BrowserWindow.removeDevToolsExtension(extension.name)
    }
    BrowserWindow.addDevToolsExtension(extension.path)
  })
}

mb.on('after-create-window', () => {
  // @ts-ignore
  mb.window.openDevTools()
})
const createWindow = () => {
  loadDevTool(extensionPath, extensions)
  // open dev tools
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mb === null) createWindow()
})
