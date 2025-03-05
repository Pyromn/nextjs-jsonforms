import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'build',
  },
  server: {
    cors: true,
  },
  test: {
    environment: 'jsdom',
    coverage: {
      include: ['src/**'],
      exclude: ['src/main.tsx'],
    },
  },
});
