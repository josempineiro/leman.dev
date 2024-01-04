<template>
  <div class="centered-layout">
    <Background />
    <slot />
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.centered-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
