import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    app: {
      changeThemeColor: (color: string) => void
    }
  }
}
