import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

export default defineConfig({
  root,
  base: '',
  build: {
    outDir: '../dist',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        atom: resolve(root, 'atom.html'),
      },
    },
  },
});
