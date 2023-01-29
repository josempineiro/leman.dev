<template>
  <div class="Layout">
    <app-header />

    <div class="Content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Layout {
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

  .Content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>
