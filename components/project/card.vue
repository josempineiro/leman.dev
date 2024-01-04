<template>
  <div :class="classes">
    <div class="ProjectCard_wrapper">
      <div v-if="project.logoUrl" class="ProjectCardMedia">
        <img :src="project.logoUrl" :alt="project.title" />
      </div>
      <div v-if="project.brandUrl" class="ProjectCardContent">
        <img :src="project.brandUrl" :alt="project.title" />
      </div>
      <div class="ProjectCardDescription">{{ project.description }}</div>
      <template v-if="project.technologies && project.technologies.length > 0">
        <FlexBox
          direction="row"
          justify="center"
          align="center"
          class="ProjectCardTechnologies"
        >
          <TechnologyIcon
            v-for="technology in project.technologies"
            :key="technology"
            :id="technology"
          />
        </FlexBox>
      </template>
      <Button variant="outline" :href="project.href" class="ProjectCardAction">
        OPEN
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

interface ProjectCardProps {
  project: Project;
  variant?: "squared" | "circular";
  selected?: boolean;
}
const props = withDefaults(defineProps<ProjectCardProps>(), {
  variant: "squared",
  selected: false,
});

const classes = computed(() => {
  return {
    ProjectCard: true,
    ProjectCard_selected: props.selected,
    ProjectCard_circular: props.variant === "circular",
  };
});
</script>

<style lang="scss">
.ProjectCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--theme-color);
  color: var(--theme-text);
  transition: all 0.3s ease-in-out;

  .ProjectCard_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding: 4rem 4rem;
    box-sizing: border-box;
  }
  &.ProjectCard_circular {
    border-radius: 50%;
    box-shadow: 0 0 0.5rem 0.25rem var(--bg-color);
  }
  &.ProjectCard_rounded {
    border-radius: 0.5rem;

    gap: 16px;
  }

  .ProjectCardMedia {
    width: 100px;
    height: 100px;

    overflow: hidden;
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

@media screen and (min-width: 768px) {
  .ProjectCard {
    border-radius: 2rem;
  }
  .ProjectCard_selected {
    scale: 1.2;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  .ProjectCard_wrapper {
    gap: 1rem;
  }
}
</style>
