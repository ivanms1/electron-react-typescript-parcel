import { ipcMain } from "electron";

ipcMain.handle("get-app-os", () => {
  return process.platform;
});
