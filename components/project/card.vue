<template>
  <div :class="classes">
    <div v-if="project.logoUrl" class="media">
      <img :src="project.logoUrl" :alt="project.title" />
    </div>
    <div class="ProjectCardContent">
      <img
        v-if="project.brandUrl"
        :src="project.brandUrl"
        :alt="project.title"
      />
      {{ project.title }}
    </div>
    <div class="ProjectCardDescription">{{ project.description }}</div>
    <template v-if="project.technologies && project.technologies.length > 0">
      <List
        direction="row"
        :get-item-id="getProjectId"
        :items="project.technologies"
        class="ProjectCardTechnologies"
      >
        <template #item="{ item }">
          <TechnologyIcon :id="item" />
        </template>
      </List>
    </template>
    <Button variant="outline" :href="project.href" class="ProjectCardAction">
      OPEN
    </Button>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

function getProjectId(project: Project): string {
  return project.id;
}

interface ProjectCardProps {
  project: Project;
  variant?: "squared" | "circular";
}
const props = withDefaults(defineProps<ProjectCardProps>(), {
  variant: "squared",
});

const classes = computed(() => {
  return {
    ProjectCard: true,
    ProjectCard_circular: props.variant === "circular",
  };
});
</script>

<style lang="scss">
.ProjectCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: var(--color-background);
  box-shadow: 0 0 0.5rem 0.25rem var(--color-background);
  &.ProjectCard_circular {
    border-radius: 50%;
    box-shadow: 0 0 0.5rem 0.25rem var(--color-background);
  }
  &.ProjectCard_rounded {
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem var(--color-background);
  }

  .media {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .ProjectCardContent {
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    img {
      height: 1.5rem;
    }
  }

  .ProjectCardDescription {
    font-size: 0.875rem;
    text-align: center;
  }

  .ProjectCardAction {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ProjectCardLink {
    border-width: 1px;
    border-style: solid;
    border-color: #192b55;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    color: #192b55;
  }

  .ProjectCardTechnologies .TechnologyIcon {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.25rem;
  }
}
</style>
