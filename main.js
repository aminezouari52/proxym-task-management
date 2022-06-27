const { app, BrowserWindow } = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  })

  win.loadFile('index.html')
}

app.on('ready', createWindow)
