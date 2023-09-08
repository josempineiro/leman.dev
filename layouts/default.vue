<template>
  <div class="Layout" @scroll="onScroll" :style="themeStyles">
    <app-header>
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </app-header>
    <div class="Content">
      <slot />
    </div>
  </div>
</template>
<script setup>
function onScroll(event) {
  console.log(event);
}

const { theme } = useTheme();

const themeStyles = computed(() => {
  return {
    "--bg-color": theme.backgroundColor,
    "--color-text": theme.color,
  };
});
</script>
<style lang="scss" scoped>
.Layout {
  background-color: white;
  height: 100vh;

  .Content {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
