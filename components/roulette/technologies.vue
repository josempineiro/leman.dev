<template>
  <Roulette
    :radius="isMobile ? 120 : 200"
    :item-radius="isMobile ? 35 : 50"
    :items="visibleTechnologies"
    :rotate="false"
  >
    <template #default>
      <slot />
    </template>
    <template #item="{ item }">
      <component :key="item.id" :is="item.component" class="Tech" />
    </template>
  </Roulette>
</template>

<script setup>
import _ from "lodash";

const props = defineProps({
  filter: {
    type: Array,
    default: () => [],
  },
});

const technologies = ref(
  _.sortBy(
    [
      {
        id: "apollographql",
        description:
          "ApolloGraphQL is a flexible, production-ready GraphQL client for every platform and stack.",
        href: "https://www.apollographql.com/",
        component: resolveComponent("IconApolloGraphQL"),
      },
      {
        id: "css",
        description:
          "CSS stands for Cascading Style Sheets and is used to style and layout web pages.",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        component: resolveComponent("IconCSS"),
      },
      {
        id: "github",
        description:
          "GitHub is a web-based platform for version control and collaboration.",
        href: "https://github.com/",
        component: resolveComponent("IconGithub"),
      },
      {
        id: "graphql",
        description:
          "GraphQL is a query language for your API, and a runtime for executing those queries against your data.",
        href: "https://graphql.org/",
        component: resolveComponent("IconGraphQL"),
      },
      {
        id: "javascript",
        description:
          "JavaScript is a programming language that allows you to create interactive and dynamic websites.",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        component: resolveComponent("IconJavascript"),
      },
      {
        id: "materialui",
        description:
          "Material-UI is a React-based UI framework that implements Google's Material Design guidelines.",
        href: "https://material-ui.com/",
        component: resolveComponent("IconMaterialUI"),
      },
      {
        id: "next",
        description:
          "Next.js is a lightweight framework for building server-rendered React applications.",
        href: "https://nextjs.org/",
        component: resolveComponent("IconNext"),
      },
      {
        id: "npm",
        description:
          "npm (short for Node Package Manager) is the package manager for JavaScript.",
        href: "https://www.npmjs.com/",
        component: resolveComponent("IconNPM"),
      },
      {
        id: "nuxt",
        description:
          "Nuxt.js is a framework for creating server-rendered Vue.js applications.",
        href: "https://nuxtjs.org/",
        component: resolveComponent("IconNuxt"),
      },
      {
        id: "react",
        description:
          "React is a JavaScript library for building user interfaces.",
        href: "https://reactjs.org/",
        component: resolveComponent("IconReact"),
      },
      {
        id: "rollup",
        description: "Rollup is a module bundler for JavaScript.",
        href: "https://rollupjs.org/",
        component: resolveComponent("IconRollup"),
      },
      {
        id: "sass",
        description:
          "SASS is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
        href: "https://sass-lang.com/",
        component: resolveComponent("IconSass"),
      },
      {
        id: "tailwind",
        description:
          "Tailwind is a utility-first CSS framework for building fast-loading, highly readable and 100% responsive web designs.",
        href: "https://tailwindcss.com/",
        component: resolveComponent("IconTailwind"),
      },
      {
        id: "typescript",
        description:
          "TypeScript is a super set of JavaScript that adds optional static typing and other features.",
        href: "https://www.typescriptlang.org/",
        component: resolveComponent("IconTypescript"),
      },
      {
        id: "vercel",
        description:
          "Vercel is a cloud platform for static sites and Serverless Functions that enables developers to host Jamstack websites and web services.",
        href: "https://vercel.com/",
        component: resolveComponent("IconVercel"),
      },
      {
        id: "vue",
        description:
          "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
        href: "https://vuejs.org/",
        component: resolveComponent("IconVue"),
      },
      {
        id: "webpack",
        description: "Webpack is a module bundler for JavaScript applications.",
        href: "https://webpack.js.org/",
        component: resolveComponent("IconWebpack"),
      },
    ],
    "id"
  )
);

const visibleTechnologies = computed(() =>
  props.filter
    .map((id) => technologies.value.find((technology) => technology.id === id))
    .filter(Boolean)
);

const { isMobile } = useDevice();
</script>
<style lang="scss">
.Tech {
  width: 100%;
  height: 100%;
}
</style>
