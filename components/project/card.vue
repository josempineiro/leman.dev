<template>
  <div class="ProjectCard">
    <div class="ProjectCardPreview">
      <img :src="project.previewUrl" :alt="project.title" />
    </div>
    <div class="ProjectCardTitle">{{ project.title }}</div>
    <div class="ProjectCardDescription">{{ project.description }}</div>
    <div class="ProjectCardAction">
      <NuxtLink :to="project.href" class="ProjectCardLink">OPEN</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  description: string;
  previewUrl: string;
  href: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "circular";
}
const props = withDefaults(defineProps<ProjectCardProps>(), {
  project: () => ({
    id: "asdf",
    title: "asdf",
    description: "asdf",
    previewUrl: "asdf",
    href: "asdf",
    technologies: [],
  }),
  variant: "default",
});

console.log(props);
</script>

<style lang="scss">
.ProjectCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: var(--color-background);
  box-shadow: 0 0 0.5rem 0.25rem var(--color-background);

  &Preview {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &Title {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
  }

  &Description {
    font-size: 0.875rem;
    text-align: center;
  }

  &Action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: var(--color-primary);
    color: var(--color-background);
    cursor: pointer;
    transition: background-color 0.25s ease;

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }
  &Link {
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
}
</style>
