const { remote } = require('electron');
const { dialog, BrowserWindow } = remote;

window.remote = remote;
window.BrowserWindow = BrowserWindow;
window.dialog = dialog;

const fs = require('fs');
window.fs = fs;
const path = require('path');
window.path = path;

// window.jQuery = window.$ = require('./render/js/jquery-3.6.0.min.js');

//window.jQuery = window.$ = require('./lib/jquery');