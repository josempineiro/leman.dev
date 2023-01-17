<template>
  <div class="Page">
    <slot />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ children: "console.log('Hello world')" }],
});
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss">
.Page {
  flex: 1;
  display: flex;
}
</style>
