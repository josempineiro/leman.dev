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
    <Chevron variant="right" />
  </ButtonFloat>
</template>

<script setup lang="ts">
import _ from "lodash";
import type { Project } from "~/types/project";

enum ViewType {
  List = "List",
  Roulette = "Roulette",
}

const route = useRoute();
const router = useRouter();

const projects = useProjects();

const currentProject = computed(() => {
  return _.find(projects.value, (project: Project) => {
    return route.query.projectId ? project.id === route.query.projectId : true;
  });
});

const currentProjectIndex = computed(() => {
  return currentProject.value
    ? projects.value.indexOf(currentProject.value)
    : -1;
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
        projectId: projects.value[currentProjectIndex.value - 1].id,
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
