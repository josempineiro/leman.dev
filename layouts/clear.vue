<template>
  <Scrollable class="clear-layout">
    <Background />
    <slot />
  </Scrollable>
</template>
<script setup></script>
<style lang="scss" scoped>
.clear-layout {
  background-color: var(--bg-color);
}
</style>
