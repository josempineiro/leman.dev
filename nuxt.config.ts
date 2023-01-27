import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/main.scss",
    "~/assets/css/fonts.css",
  ],
  modules: ["nuxt-icon", "nuxt-purgecss", "@nuxtjs/device"],
  vite: {
    plugins: [eslintPlugin()],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in", duration: 500 },
  },
  components: {
    dirs: [
      {
        path: "~/components/icon",
        global: true,
      },
      "~/components",
    ],
  },
});
