import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    extensions: ['.mts', '.ts', '.js'], // Lägg till .mts
  },
  build: {
    target: 'esnext',
  },

  server: {
    open: true, // Öppnar webbläsaren automatiskt
  },
  base: './', // Gör att projektet fungerar även vid lokala filsystem
});
