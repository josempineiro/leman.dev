<template>
  <ul class="List">
    <li
      v-for="project in projects"
      :key="project.id"
      :data-id="project.id"
      :class="[
        {
          ListItem: true,
          List_current: project.id === currentProject.id,
        },
      ]"
      @click="$emit('click-project', project)"
    >
      <ProjectCard
        :key="project.id"
        :project="project"
        :class="project.class"
        :style="project.style"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

const props = defineProps<{
  projects: Project[];
  currentProject: Project;
}>();

const currentProjectIndex = computed(() => {
  return props.projects.indexOf(props.currentProject);
});

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
  (event: "click-project"): void;
}>();

function nextProject() {
  emit("nextProject");
}

function prevProject() {
  emit("prevProject");
}
</script>
<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/pokemon-solid");
.List {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  .ListItem {
    width: 100%;
    max-height: 200px;
    &.List_current {
      background-color: #f5f5f5;
      box-shadow: 0 0 0px 5px rgb(255 255 255), 0 0 0px 10px rgb(0 0 0);
    }
  }
}

@media (max-width: 768px) {
  .List {
    .ListItem {
      width: 100%;
    }
  }
}
</style>
