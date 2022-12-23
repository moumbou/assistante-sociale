const path = require("path");
const mongoose = require("mongoose");

const { ipcMain, app, BrowserWindow, dialog } = require("electron");
const isDev = require("electron-is-dev");

let main = null;

// initiallisation de la fennetre principal
function createWindow() {
  main = new BrowserWindow({
    width: 1295,
    height: 850,
    minWidth: 1295,
    minHeight: 850,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webSecurity: false,
    },
    title: false,
    show: false,
  });

  main.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

// connection de la base de données
mongoose.connect(
  isDev
    ? "mongodb://localhost:27017/ass_sociale-test"
    : "mongodb://localhost:27017/ass_sociale",
  async (err) => {
    if (err)
      return dialog.showErrorBox(
        `erreur l'ors de la connexion a la BDD`,
        err.message
      );
    if (isDev) console.log("connected to data base successfully !");

    //? FIX QttFix FIELD
    // await fixQttProdctStock();

    // afficher la fennetre en cas de connexion reussite !
    main.webContents.on("did-finish-load", async (e) => {
      main.show();
    });
  }
);

// creation de l'application
app.whenReady().then(createWindow);

//IPCMAIN