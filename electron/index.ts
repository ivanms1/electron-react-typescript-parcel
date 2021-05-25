import { app, BrowserWindow } from "electron";
import path from "path";
import isDev from "electron-is-dev";
import serve from "electron-serve";

import "./ipcMain";

const loadURL = serve({ directory: "dist/parcel-build" });

const createWindow = async (): Promise<void> => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    await mainWindow.loadURL("http://localhost:1234");
    mainWindow.webContents.openDevTools({ mode: "detach" });
  } else {
    await loadURL(mainWindow);
  }
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
