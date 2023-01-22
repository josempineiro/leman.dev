<template>
  <div class="ProjectsSlider">
    <button @click="currentProjectIndex = Math.max(0, currentProjectIndex - 1)">
      PREV
    </button>
    <RouletteTechnologies :filter="selectedProject.technologies">
      <div class="SelectedProject">
        <img
          :style="{ width: '100%', height: '100%' }"
          :src="selectedProject.previewUrl"
          :class="{
            SelectedProject__preview: true,
            [selectedProject.class]: Boolean(selectedProject.class),
          }"
          :alt="selectedProject.id"
        />
      </div>
    </RouletteTechnologies>
    <button
      @click="
        currentProjectIndex = Math.min(
          projects.length - 1,
          currentProjectIndex + 1
        )
      "
    >
      NEXT
    </button>
  </div>
</template>

<script setup>
import _ from "lodash";
import secretsanta from "~/assets/secret-santa-preview.png";

const projects = ref(
  _.sortBy(
    [
      {
        id: "pokedex",
        description:
          "This is my Pokedex concept built with Nuxt3 and Free PokeAPI.",
        href: "https://pokedex.leman.dev",
        previewUrl:
          "https://raw.githubusercontent.com/josempineiro/pokedex/main/public/icons/Pokedex.svg",
        technologies: ["nuxt", "vue", "javascript", "sass", "github", "vercel"],
      },
      {
        id: "promilsim",
        description:
          "PROMILSIM is a web application that simulates the effects of alcohol on the human body.",
        href: "https://promilsim.com/",
        previewUrl: "https://promilsim.com/images/airsoft-2.jpg",
        class: "rounded",
        technologies: [
          "next",
          "react",
          "typescript",
          "materialui",
          "vercel",
          "github",
        ],
      },
      ,
      {
        id: "secretsanta",
        description:
          "Invite your friends or family to join and exchange gifts.",
        href: "https://secretsanta.leman.dev/",
        previewUrl: secretsanta,
        class: "rounded",
        technologies: [
          "next",
          "react",
          "typescript",
          "materialui",
          "vercel",
          "github",
        ],
      },
    ],
    "id"
  )
);

const currentProjectIndex = ref(0);

const selectedProject = computed(
  () => projects.value[currentProjectIndex.value]
);
</script>
<style lang="scss">
.SelectedProject {
  width: 100%;
  height: 100%;
  padding: 25%;
  box-sizing: border-box;
}
.ProjectsSlider {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.SelectedProject__preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.rounded {
    border-radius: 50%;
  }
}
</style>
