const {
    app,
    BrowserWindow
  } = require('electron')

  // early out in case of app start during installation on Windows
  if (require('electron-squirrel-startup')) return app.quit();

  const url = require("url");
  const path = require("path");
  
  const { Server , Database} = require('happy-barnacle');
  
  const db = new Database("objectEventStore.db");
  const runServer = new Server(db);
  runServer.start(8000);

  let appWindow
  
  function initWindow() {
    appWindow = new BrowserWindow({
      width: 1000,
      height: 800,
      webPreferences: {
        nodeIntegration: true
      },
      icon:"assets/applicationIcon.png"
    })
  
    // Electron Build Path
    appWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, `/index.html`),
        protocol: "file:",
        slashes: true
      })
    );
  
    appWindow.on('closed', function () {
      appWindow = null
    })
  }
  
  app.on('ready', initWindow)
  
  // Close when all windows are closed.
  app.on('window-all-closed', function () {
  
    // On macOS specific close process
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', function () {
    if (win === null) {
      initWindow()
    }
  })