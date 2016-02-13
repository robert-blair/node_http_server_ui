import * as electron from 'electron';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
 app.on('ready', ()=>{
    require('./project/ui_implementation/window-main')(mainWindow);
});

app.on('window-all-closed', function () {
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

