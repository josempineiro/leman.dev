import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/reset.css", "~/assets/css/main.scss"],
  modules: ["nuxt-icon", "nuxt-purgecss"],
  vite: {
    plugins: [eslintPlugin()],
  },
});
