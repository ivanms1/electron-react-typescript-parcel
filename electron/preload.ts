import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getAppOS: () => ipcRenderer.invoke("get-app-os"),
});
