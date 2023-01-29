<template>
  <List
    :items="projects"
    :selected-item="currentProject"
    :get-item-id="getProjectId"
    @click-item="(item) => emit('click-project', item)"
    direction="column"
    class="ProjectList"
  >
    <template #item="{ item }">
      <ProjectCard
        :key="item.id"
        :project="item"
        :class="item.class"
        :style="item.style"
      />
    </template>
  </List>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

const props = defineProps<{
  projects: Project[];
  currentProject: Project;
}>();

onMounted(() => {
  console.log(document.querySelector(`[data-id="${props.currentProject.id}"]`));
  document
    .querySelector(`[data-id="${props.currentProject.id}"]`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
});

onUpdated(() => {
  console.log(document.querySelector(`[data-id="${props.currentProject.id}"]`));
  document
    .querySelector(`[data-id="${props.currentProject.id}"]`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
});

const emit = defineEmits<{
  (event: "click-project", project: Project): void;
}>();

function getProjectId(project: Project) {
  return project.id;
}
</script>
<style lang="scss">
.ProjectList {
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: calc(100vh - 78px);
  display: block;
}
.ProjectList .ListItem {
  scroll-snap-align: center;
  height: calc(100vh - 78px);
  display: block;
}
</style>
