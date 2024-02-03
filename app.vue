<template>
  <NuxtLayout>
    <google-font href="https://fonts.googleapis.com/css2?family=Roboto" />

    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Leman.dev - Frontend Engineer",
  keywords:
    "frontend, engineer, developer, web, javascript, typescript, vue, react, css, html, scss, tailwind, design, ui, ux, leman, jose, pineiro",
  author: "Jose Piñeiro",
  description: "I'm Jose Piñeiro. Welcome to my personal Web page.",

  ogDescription: "I'm Jose Piñeiro. Welcome to my personal Web page.",
  ogTitle: "Leman.dev - Frontend Engineer",
  ogImage: "https://avatars.githubusercontent.com/u/71317594?v=4",
  ogImageAlt: "Jose Piñeiro",
  ogLocale: "en",
  ogSiteName: "Leman.dev",
  ogUrl: "https://leman.dev",
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterDescription: "I'm Jose Piñeiro. Welcome to my personal Web page.",
  twitterTitle: "Leman.dev - Frontend Engineer",
  twitterImage: "https://avatars.githubusercontent.com/u/71317594?v=4",
  twitterImageAlt: "Jose Piñeiro",
  twitterSite: "NavyLemux",
});
useHead({
  title: "Leman.dev - Frontend Engineer",
  meta: [
    {
      name: "description",
      content: "I'm Jose Piñeiro. Welcome to my personal Web page.",
    },
  ],
});
</script>

<style lang="scss">
@for $i from 1 through 10 {
  .page-enter-active a:nth-child(#{$i}n),
  .page-leave-active a:nth-child(#{$i}n) {
    transition-delay: #{$i * 0.1}s;
  }
}

.page-enter-active a,
.page-leave-active a {
  transition: all 0.2s;
  opacity: 1;
}

.page-enter-from a,
.page-leave-to a {
  opacity: 0;
}
</style>
