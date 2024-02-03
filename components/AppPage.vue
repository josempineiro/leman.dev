<template>
  <div class="Page">
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps({
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
