import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/My_Portfolio/",
  plugins: [react()],
  commonjsOptions: {
    esmExternals: true,
 },
});
