// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/fonts.css",
    "~/assets/css/main.scss",
  ],
  modules: ["nuxt-icon", "nuxt-purgecss", "@nuxtjs/device"],
  app: {
    pageTransition: { name: "page", mode: "out-in", duration: 500 },
  },
  components: {
    dirs: [
      {
        path: "~/components/ui",
        global: true,
      },
      {
        path: "~/components/icon",
        global: true,
      },
      "~/components",
    ],
  },
});
