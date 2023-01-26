<template>
  <div class="ProjectsSlider">
    <RouletteTechnologies :filter="selectedProject.technologies">
      <ProjectCard
        :project="selectedProject"
        variant="circular"
        :style="selectedProject.style"
      />
    </RouletteTechnologies>
    <FlexBox direction="row" justify="space-evenly" w="full">
      <button
        @click="currentProjectIndex = Math.max(0, currentProjectIndex - 1)"
      >
        PREV
      </button>
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
    </FlexBox>
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
        title: "Pokedex",
        description:
          "This is my Pokedex concept built with Nuxt3 and Free PokeAPI.",
        href: "https://pokedex.leman.dev",
        previewUrl:
          "https://raw.githubusercontent.com/josempineiro/pokedex/main/public/icons/Pokedex.svg",
        technologies: ["nuxt", "vue", "javascript", "sass", "github", "vercel"],
      },
      {
        id: "promilsim",
        title: "Promilsim",
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
          "github",
          "vercel",
        ],
      },
      {
        id: "secretsanta",
        title: "Secret Santa",
        description:
          "Invite your friends or family to join and exchange gifts.",
        href: "https://secretsanta.leman.dev/",
        previewUrl: secretsanta,
        class: "rounded",
        technologies: [
          "next",
          "react",
          "typescript",
          "tailwind",
          "github",
          "vercel",
        ],
      },
      {
        id: "rick-and-morty",
        title: "Rick and Morty",
        description:
          "This is my Rick and Morty concept built with Next and Free Rick and Morty API.",
        href: "https://rick-and-morty.leman.dev",
        previewUrl:
          "https://rick-and-morty.leman.dev/icons/apple-touch-icon.png",
        class: "rounded",
        technologies: [
          "next",
          "react",
          "typescript",
          "tailwind",
          "apollographql",
          "graphql",
          "github",
          "vercel",
        ],
      },
      {
        id: "minecraft-ui",
        title: "Micreaft UI",
        description:
          "The Minecraft UI which Mojand Studios wishes to had and haven't.",
        href: "https://minecraft-ui.leman.dev/",
        previewUrl: "https://minecraft-ui.leman.dev/images/brand.png",
        class: "rounded",
        style: {
          background: "rgb(35, 35, 42)",
          color: "white",
        },
        technologies: [
          "react",
          "typescript",
          "css",
          "rollup",
          "storybook",
          "github",
          "vercel",
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
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #eaeaea;

  border-radius: 50%;
  overflow: hidden;
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
@media (max-width: 768px) {
  .ProjectsSlider {
    flex-direction: column;
  }
  .SelectedProject {
    padding: 15%;
  }
}
</style>
