import { defineConfig } from "vite"

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/Jacob-Gadberry-Website/",
// })

import path from "path"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("/Jacob-Gadberry-Website/", "./src"),
    },
  },
})
