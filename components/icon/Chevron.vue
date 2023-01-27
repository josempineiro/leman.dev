<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="Chevron"
    fill="none"
  >
    <path
      v-if="variant === 'left'"
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm1.707-11.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 12l2.293-2.293z"
      clip-rule="evenodd"
    />
    <path
      v-else-if="variant === 'right'"
      fill="currentColor"
      fill-rule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM10.293 9.707a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value),
  },
});
</script>

<style>
.Chevron {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
