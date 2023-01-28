<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 100"
    class="View"
  >
    <path :d="path" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: "List" | "Roulette";
}>();

const paths = ref({
  List: "m 10 20 H 90 M 10 40 H 90 M 10 60 H 90 M 10 80 H 90",
  Roulette: "M 50, 50 m -25, 0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0",
});

const path = computed(() => {
  return paths.value[props.variant];
});
</script>

<style>
.View {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-linejoin: round;
}
path {
  transition: all 0.3s ease-in-out;
}
</style>
