<template>
  <div ref="header" class="HeaderWrapper" id="asdfasdfasdf">
    <header :class="classes">
      <NuxtLink to="/">
        <app-logo />
      </NuxtLink>
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
    ([e]) => {
      if (e.intersectionRatio < 1) {
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
  min-height: 60px;

  .AppHeader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease-in-out;

    &_sticky {
      background-color: #025b62;
    }
  }
}
</style>
