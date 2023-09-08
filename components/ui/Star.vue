<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
const classes = computed(() => {
  return {
    star: true,
    "star-active": props.active,
  };
});
</script>

<style lang="scss">
.star {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--text-color-secondary);
}

.star-active {
  background-color: var(--text-color-accent);
}
</style>
