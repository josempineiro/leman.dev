<template>
  <div class="default-layout">
    <Background />
    <app-header>
      <NuxtLink to="/">
        <Icon size="2rem" name="ep:back" color="currentColor" />
      </NuxtLink>
    </app-header>
    <div class="default-layout_content">
      <slot />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.default-layout {
  height: 100vh;

  .default-layout_content {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    padding-top: 78px;
  }
}
.default-layout_title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 16px;
  color: var(--color-text);
}
</style>
