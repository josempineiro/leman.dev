<template>
  <div class="ProjectRoulette">
    <Roulette
      :radius="isMobile ? 120 : 200"
      :item-radius="isMobile ? 35 : 50"
      :items="visibleTechnologies"
      :rotate="false"
    >
      <template #default>
        <ProjectCard
          :key="currentProject.id"
          :project="$omit(currentProject, ['technologies'])"
          variant="circular"
          :class="currentProject.class"
          :style="currentProject.style"
        />
      </template>
      <template #item="{ item: technology }">
        <Technology
          :key="(technology as Technology).id"
          :technology="(technology as Technology)"
          class="ProjectTechnologyIcon"
        />
      </template>
    </Roulette>
    <FlexBox class="Buttons" justify="space-between" w="full">
      <Button
        @click="prevProject"
        class="NavButton"
        variant="text"
        color="secondary"
        :disabled="currentProjectIndex === 0"
      >
        <Chevron variant="left" />
      </Button>
      <Button
        @click="nextProject"
        class="NavButton"
        variant="text"
        color="secondary"
        :disabled="currentProjectIndex === projects.length - 1"
      >
        <Chevron variant="right" />
      </Button>
    </FlexBox>
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";
import type { Project } from "~/types/project";
import type { Technology } from "~/types/technology";

const props = defineProps<{
  projects: Project[];
  currentProject: Project;
}>();

const emit = defineEmits<{
  (event: "nextProject"): void;
  (event: "prevProject"): void;
}>();

const currentProjectIndex = computed(() => {
  return props.projects.indexOf(props.currentProject);
});

const technologies = useTechnologies();

const visibleTechnologies = computed(() =>
  _.intersectionWith(
    technologies.value,
    props.currentProject.technologies,
    (technology, comparedTechnology) => technology.id === comparedTechnology
  ).map((technology) => {
    return {
      ...technology,
      component: resolveComponent(technology.component),
    };
  })
);

const { isMobile } = useDevice();

function nextProject() {
  emit("nextProject");
}

function prevProject() {
  emit("prevProject");
}
</script>
<style lang="scss">
.logo-rounded .media img {
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1/1;
  width: auto !important;
  height: 100% !important;
  object-fit: cover !important;
}

.ProjectRoulette {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

.ProjectTechnologyIcon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .ProjectRoulette {
    flex-direction: column;
  }
  .Buttons {
    bottom: 0;
  }
}
</style>
