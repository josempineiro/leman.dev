<template>
  <component
    v-if="technology"
    :is="technology.component"
    class="TechnologyIcon"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
}>();

const technologies = useTechnologies();

const technology = computed(() => {
  return technologies.value.find((technology) => technology.id === props.id);
});
</script>
