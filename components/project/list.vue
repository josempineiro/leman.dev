<template>
  <List
    :items="projects"
    :selected-item="currentProject"
    :get-item-id="getProjectId"
    @click-item="(item) => emit('click-project', item)"
    @scroll="handleScroll"
    direction="column"
    class="ProjectList"
  >
    <template #item="{ item, index }">
      <div class="SectionWrapper" :key="item.id + index">
        <ProjectCard
          :project="item"
          :class="item.class"
          :style="{ color: item.style.text, backgroundColor: item.style.color }"
          :selected="currentProject.id === item.id"
        />
      </div>
    </template>
  </List>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

const { projects, currentProject } = defineProps({
  projects: {
    type: Array<Project>,
    required: true,
  },
  currentProject: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits<{
  (event: "click-project", project: Project): void;
}>();

function handleScroll(event: Event) {
  const target = event.target as HTMLElement;
  const nextProject =
    projects[Math.round(target.scrollTop / target.clientHeight)];
  emit("click-project", nextProject);
}

function getProjectId(project: Project) {
  return project.id;
}
</script>
<style lang="scss">
.ProjectList {
  scroll-snap-type: y mandatory;
  overflow: auto;
  display: block;
}
.ProjectList .ListItem {
  scroll-snap-align: center;
  height: 100%;
  display: block;
}
.SectionWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
@media (min-width: 768px) {
  .SectionWrapper {
    max-width: 50vw;
    margin: auto;
    padding: 8rem 4rem;
  }
}
</style>
