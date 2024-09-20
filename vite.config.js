import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: false,
    open: true, // Abre el navegador automáticamente
    cors: {
      origin: "*", // Permite solicitudes desde cualquier origen
    },
  },
});
