import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works under any subfolder. Output goes into the
// website's public/ folder, so the site serves it at /ReturnAndEarn/app-demo/.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: '../public/app-demo',
    emptyOutDir: true,
  },
});
