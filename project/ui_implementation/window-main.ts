const path = require('path');

import * as electron from 'electron';
const BrowserWindow = electron.BrowserWindow;





var options  = {

//  ALL POSSIBLE OPTIONS FOR ELECTRON WINDOW OBJECT [ http://electron.atom.io/docs/v0.36.5/api/browser-window/ ]

// width Integer - Window's width in pixels. Default is 800
    width: 500,
// height Integer - Window's height in pixels. Default is 600.
    height: 500,
// x Integer - Window's left offset from screen. Default is to center the Window

// y Integer - Window's top offset from screen. Default is to center the window.
 

// useContentSize Boolean - The width and height would be used as web page's size, which means the actual window's size will include window frame's size and be slightly larger. Default is false.
// center Boolean - Show window in the center of the screen.
// minWidth Integer - Window's minimum width. Default is 0.
    
// minHeight Integer - Window's minimum height. Default is 0.
    
// maxWidth Integer - Window's maximum width. Default is no limit.
    
// maxHeight Integer - Window's maximum height. Default is no limit.
    
// resizable Boolean - Whether window is resizable. Default is true.
// movable Boolean - Whether window is movable. This is only implemented on OS X. Default is true.
// alwaysOnTop Boolean - Whether the window should always stay on top of other windows. Default is false.

// fullscreen Boolean - Whether the window should show in fullscreen. When set to false the fullscreen button will be hidden or disabled on OS X. Default is false.
// skipTaskbar Boolean - Whether to show the window in taskbar. Default is false.
// kiosk Boolean - The kiosk mode. Default is false.
// title String - Default window title. Default is "Electron".
// icon NativeImage - The window icon, when omitted on Windows the executable's icon would be used as window icon.icon NativeImage - The window icon, when omitted on Windows the executable's icon would be used as window icon.
// show Boolean - Whether window should be shown when created. Default is true.
// frame Boolean - Specify false to create a Frameless Window. Default is true.
    // frame: false,
// acceptFirstMouse Boolean - Whether the web view accepts a single mouse-down event that simultaneously activates the window. Default is false.
// disableAutoHideCursor Boolean - Whether to hide cursor when typing. Default is false.
// autoHideMenuBar Boolean - Auto hide the menu bar unless the Alt key is pressed. Default is false.
// enableLargerThanScreen Boolean - Enable the window to be resized larger than screen. Default is false.
// backgroundColor String - Window's background color as Hexadecimal value, like #66CD00 or #FFF. Default is #000 (black) for Linux and Windows, #FFF for Mac (or clear if transparent).
// darkTheme Boolean - Forces using dark theme for the window, only works on some GTK+3 desktop environments. Default is false
// transparent Boolean - Makes the window transparent. Default is false.
    // transparent: true
// type String - The type of window, default is normal window.
//         The possible values of 'type' depends on the platform.
//               On Linux, possible values for 'type' are: desktop, dock, toolbar, splash, notification
//               On OS X, possible values: desktop, textured
// titleBarStyle String - The style of window title bar. This option is only supported by OS X 10.10 Yosemite and newer. See above URL for info.

// webPreferences Object - Settings of web page's features.
};
var html =path.join('file://'+ __dirname +'/window-main.html');

module.exports = function(windowRef){

    windowRef = new BrowserWindow(options);  // Create the browser window using the mainWindowOptions object.
    windowRef.loadURL(html);// and load the index.html of the app.
    var webContents = windowRef.webContents;
     // Open the DevTools.



    windowRef.on('closed', (  ) => ( windowRef = null ))
}