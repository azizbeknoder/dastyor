import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.MP4"], // Включение .MP4 файлов как ассетов
  server: {
    hmr: {
      overlay: false, // Отключение ошибки в overlay (для удобства)
    },
  },
});
