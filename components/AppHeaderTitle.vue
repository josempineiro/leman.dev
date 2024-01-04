<template>
  <span class="AppHeaderTitle">
    <slot></slot>
  </span>
</template>
<script setup></script>
<style lang="scss">
.AppHeaderTitle {
  font-family: var(--font-family);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-secondary);
}
</style>
