import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        open: true, // Öppnar webbläsaren automatiskt
    },
    base: './', // Gör att projektet fungerar även vid lokala filsystem
})
