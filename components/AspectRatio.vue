<template>
  <div class="AspectRatio">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.AspectRatio {
  position: relative;
  width: 100%;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
}
</style>
