const path = require("path");
const { app, BrowserWindow } = require('electron')
const log = require('electron-log')
log.transports.file.resolvePath = () => path.join('./', '/logs/main.log')

const { autoUpdater } = require('electron-updater')

let win;
function createWindow() {
    win = new BrowserWindow({ width: 700, height: 500 })
    win.loadFile(path.join(__dirname, 'index.html'))
}

app.on('ready', () => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on('update-available', () => {
    log.info("update-available")
})
autoUpdater.on('checking-for-update', () => {
    log.info("checking-for-update")
})
autoUpdater.on('download-progress', () => {
    log.info("download-progress")
})
autoUpdater.on('update-downloaded', () => {
    log.info("update-downloaded")
})