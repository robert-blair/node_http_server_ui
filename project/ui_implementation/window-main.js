var path = require('path');
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var options = {
    //  ALL POSSIBLE OPTIONS FOR ELECTRON WINDOW OBJECT [ http://electron.atom.io/docs/v0.36.5/api/browser-window/ ]
    // width Integer - Window's width in pixels. Default is 800
    width: 500,
    // height Integer - Window's height in pixels. Default is 600.
    height: 500,
};
var html = path.join('file://' + __dirname + '/window-main.html');
module.exports = function (windowRef) {
    windowRef = new BrowserWindow(options); // Create the browser window using the mainWindowOptions object.
    windowRef.loadURL(html); // and load the index.html of the app.
    var webContents = windowRef.webContents;
    // Open the DevTools.
    windowRef.on('closed', function () { return (windowRef = null); });
};
