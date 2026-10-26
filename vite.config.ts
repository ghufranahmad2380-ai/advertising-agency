import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static front-end only: no backend, API routes or deployment configuration.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});
