<template>
  <div ref="header" class="HeaderWrapper" id="asdfasdfasdf">
    <header :class="classes">
      <NuxtLink to="/">
        <AppLogo />
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
  min-height: 78px;

  .AppHeader {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 78px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    color: #192b55;

    &.AppHeader_sticky {
      background-color: #192b55;
      color: white;
    }
    .AppLogo {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
</style>
