const { app, BrowserWindow } = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
    // icon: 'url',
    // modal: true, //This only works when the window is a child window
    enablePreferredSizeMode: true,
  })

  win.loadFile('index.html')
}

app.on('ready', createWindow)
