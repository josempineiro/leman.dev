<template>
  <List
    :items="projects"
    :selected-item="currentProject"
    :get-item-id="getProjectId"
    @click-item="(item) => emit('click-project', item)"
    direction="column"
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
<style lang="scss"></style>
