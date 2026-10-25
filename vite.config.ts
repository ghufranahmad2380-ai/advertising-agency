import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Design-phase prototype. No backend, no deployment configuration.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});
