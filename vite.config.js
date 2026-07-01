<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/revivehub/",
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true
  }
})
>>>>>>> 1f42338bf0c3783f7be5931289abce831000b3bc
