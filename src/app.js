const {
  app,
  BrowserWindow
} = require('electron')

// early out in case of app start during installation on Windows
if (require('electron-squirrel-startup')) return app.quit();

const url = require("url");
const path = require("path");
const fs = require("fs");

const config = require('./assets/config/config.prod.json');

const { Server, Database } = require('happy-barnacle');

const homedir = require('os').homedir();
const appDirectory = path.join(homedir,'.heijunka');

if (!fs.existsSync(appDirectory)){
    fs.mkdirSync(appDirectory);
}

const dbFile = path.join(appDirectory,"objectEventStoreApp.db");

const db = new Database(dbFile);
const runServer = new Server(db);
runServer.start(config.backend.port);

let appWindow

function initWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    },
    icon: "dist/assets/application_icon_heijunka"
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