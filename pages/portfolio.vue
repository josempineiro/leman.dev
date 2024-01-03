<template>
  <ProjectList
    class="ProjectList"
    v-if="viewType === ViewType.List"
    :projects="projects"
    :current-project="currentProject"
    @next-project="nextProject"
    @prev-project="prevProject"
    @click-project="selectProject"
  />
  <div class="scroll-down">
    <Icon size="2rem" name="gg:chevron-down-o" color="currentColor" />
  </div>
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
  }) as Project;
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
</script>
<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/pokemon-solid");

.portfolio-page {
  width: 100%;
  height: 100%;
  background-color: #333;
}
.logo-rounded .ProjectCardMedia img {
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  width: auto !important;
  height: 100% !important;
  object-fit: cover !important;
}
.ProjectList .ProjectCard_wrapper {
  max-width: 80vw;
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
  .Buttons {
    bottom: 0;
  }
}

@keyframes scroll-down {
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 1rem);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
.scroll-down {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-down 1s infinite;
}
</style>
