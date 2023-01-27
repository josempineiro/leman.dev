<template>
  <div class="ProjectRoulette">
    <RouletteTechnologies :filter="currentProject.technologies">
      <ProjectCard
        :key="currentProject.id"
        :project="currentProject"
        variant="circular"
        :class="currentProject.class"
        :style="currentProject.style"
      />
    </RouletteTechnologies>
    <FlexBox class="Buttons" justify="space-between" w="full">
      <Button
        @click="prevProject"
        class="NavButton"
        variant="text"
        color="secondary"
        :disabled="currentProjectIndex === 0"
      >
        <IconChevron variant="left" />
      </Button>
      <Button
        @click="nextProject"
        class="NavButton"
        variant="text"
        color="secondary"
        :disabled="currentProjectIndex === projects.length - 1"
      >
        <IconChevron variant="right" />
      </Button>
    </FlexBox>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

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

function nextProject() {
  emit("nextProject");
}

function prevProject() {
  emit("prevProject");
}
</script>
<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/pokemon-solid");

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

@media (max-width: 768px) {
  .ProjectRoulette {
    flex-direction: column;
  }
  .Buttons {
    bottom: 0;
  }
}
</style>
