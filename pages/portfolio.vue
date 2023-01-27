<template>
  <ProjectRoulette
    v-if="viewType === ViewType.Roulette"
    :projects="projects"
    :current-project="currentProject"
    @next-project="nextProject"
    @prev-project="prevProject"
  />
  <ProjectList
    v-if="viewType === ViewType.List"
    :projects="projects"
    :current-project="currentProject"
    @next-project="nextProject"
    @prev-project="prevProject"
    @click-project="selectProject"
  />
  <ButtonFloat @click="nextViewType" position="fixed" top="1rem" right="1rem">
    <IconChevron variant="right" />
  </ButtonFloat>
</template>

<script setup lang="ts">
import _ from "lodash";
import type { Project } from "~/types/project";
import secretSantaLogo from "~/assets/secret-santa-logo.png";
import secretSantaBrand from "~/assets/secret-santa-brand.png";
import pokedexTitleImage from "~/assets/pokedex.png";

enum ViewType {
  List = "List",
  Roulette = "Roulette",
}

const route = useRoute();
const router = useRouter();

const projects = ref<Project[]>(
  _.sortBy(
    [
      {
        id: "pokedex",
        description: "Pokedex concept for PokeAPI.",
        href: "https://pokedex.leman.dev",
        style: {
          color: "#fddf00",
          background: "#295ebb",
        },
        brandUrl: pokedexTitleImage,
        logoUrl:
          "https://raw.githubusercontent.com/josempineiro/pokedex/main/public/icons/Pokedex.svg",
        technologies: ["nuxt", "vue", "javascript", "sass", "github", "vercel"],
      },
      {
        id: "promilsim",
        title: "Promilsim",
        description: "Find airsoft teams, matches and more!",
        href: "https://promilsim.com/app",
        logoUrl: "https://promilsim.com/images/airsoft-2.jpg",
        class: "logo-rounded",
        style: {
          background: "#2d2d2d",
          color: "#ffffff",
        },
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
        description:
          "Invite your friends or family to join and exchange gifts.",
        href: "https://secretsanta.leman.dev/",
        logoUrl: secretSantaLogo,
        brandUrl: secretSantaBrand,
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
        description: "Memorize game using Rick and Morty API.",
        href: "https://rick-and-morty.leman.dev/game",
        logoUrl: "https://rick-and-morty.leman.dev/icons/apple-touch-icon.png",
        brandUrl: "https://rick-and-morty.leman.dev/logo.svg",
        class: "logo-rounded",
        style: {
          background: "#0c0e0c",
          color: "#ffffff",
        },
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
        description: "UI which Mojand Studios wishes to had and haven't.",
        href: "https://minecraft-ui.leman.dev/",
        brandUrl: "https://minecraft-ui.leman.dev/images/brand.png",
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

const currentProject = computed<Project>(() => {
  return _.find(projects.value, (project: Project) => {
    return route.query.projectId ? project.id === route.query.projectId : true;
  });
});

const currentProjectIndex = computed(() => {
  return projects.value.indexOf(currentProject.value);
});

function nextProject() {
  if (currentProjectIndex.value + 1 < projects.value.length) {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        projectId: projects.value[currentProjectIndex.value + 1].id,
      },
    });
  }
}

function selectProject(project: Project) {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      projectId: project.id,
    },
  });
}

function prevProject() {
  if (currentProjectIndex.value > 0) {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        projectId:
          projects.value[projects.value.indexOf(currentProject.value) - 1].id,
      },
    });
  }
}

const viewType = computed(() => {
  return route.query.viewType
    ? (route.query.viewType as ViewType)
    : ViewType.List;
});

function nextViewType() {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      projectId: currentProject.value.id,
      viewType:
        ViewType[
          Object.values(ViewType)[
            (Object.values(ViewType).indexOf(viewType.value) + 1) %
              Object.values(ViewType).length
          ]
        ],
    },
  });
}
</script>
<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/pokemon-solid");

.SelectedProject {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #eaeaea;

  border-radius: 50%;
  overflow: hidden;
}
.logo-rounded .media img {
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  width: auto !important;
  height: 100% !important;
  object-fit: cover !important;
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

.Buttons {
  position: absolute;
  padding: 32px;
  max-width: 900px;
}

.NavButton .Chevron {
  width: 48px;
  height: 48px;
}

@media (max-width: 768px) {
  .ProjectsSlider {
    flex-direction: column;
  }
  .SelectedProject {
    padding: 15%;
  }
  .Buttons {
    bottom: 0;
  }
}
</style>
