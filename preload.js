/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  AETHER — Preload Script (Context Bridge)                       ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Exposes safe IPC methods to the renderer process.              ║
 * ║  contextIsolation: true — no direct Node access in renderer.    ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * DEVNOTES:
 * - Window controls (min/max/close) use one-way IPC (send)
 * - isMaximized uses two-way IPC (invoke) for return value
 * - scanSheepFolder provides filesystem access for Electric Sheep
 *   visualizer video scanning (reads folder, filters video extensions)
 * - All paths are normalized to forward slashes for cross-platform compat
 */

const { contextBridge, ipcRenderer } = require('electron');

const fs = require('fs');
const pathMod = require('path');

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  isMaximized: () => ipcRenderer.invoke('window-is-maximized'),
  onWindowState: (callback) => {
    ipcRenderer.on('window-state', (_event, state) => callback(state));
  },
  // Electric Sheep: scan a folder for video files
  scanSheepFolder: (folderPath) => {
    try {
      if (!fs.existsSync(folderPath)) return [];
      const files = fs.readdirSync(folderPath);
      const videoExts = ['.mp4', '.webm', '.mkv', '.avi', '.mov', '.m4v'];
      return files
        .filter(f => videoExts.includes(pathMod.extname(f).toLowerCase()))
        .map(f => pathMod.join(folderPath, f).replace(/\\/g, '/'));
    } catch(e) {
      console.error('Sheep scan error:', e);
      return [];
    }
  },
});
