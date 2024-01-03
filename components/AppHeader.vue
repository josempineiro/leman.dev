<template>
  <div ref="header" class="HeaderWrapper">
    <header :class="classes">
      <slot></slot>
    </header>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const header = ref();

const sticky = ref(false);

const classes = computed(() => {
  return ["AppHeader", sticky.value ? "AppHeader_sticky" : ""];
});

onMounted(() => {
  const observer = new IntersectionObserver(
    ([event]) => {
      if (event.intersectionRatio < 1) {
        sticky.value = true;
      } else {
        sticky.value = false;
      }
    },
    { threshold: [1] }
  );
  observer.observe(header.value);
});
</script>
<style lang="scss">
.HeaderWrapper {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  background-color: var(--bg-color);
  color: var(--color-text);
  transition: all 0.3s ease-in-out;
  .AppHeader {
    height: 100%;
    padding: 0 32px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    gap: 1rem;
    .AppLogo {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
</style>
