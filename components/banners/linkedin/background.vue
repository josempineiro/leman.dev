<template>
  <div class="Background"></div>
</template>
<script setup></script>
<style lang="scss">
.Background {
  position: absolute;
  background-color: #192b55;
  background: linear-gradient(
    90deg,
    rgba(25, 43, 85, 1) 0%,
    rgba(25, 43, 85, 1) 40%,
    rgba(2, 91, 98, 1) 60%,
    rgba(2, 91, 98, 1) 80%,
    rgba(25, 43, 85, 1) 100%
  );
  top: 0;
  left: 0;
  padding: 16px;
  width: 100%;
  height: 100%;
  --mask: linear-gradient(red, #{rgba(#000, 0.45)});

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(#000, transparent) 0 0/ 10px 10px space;
    -webkit-mask: var(--mask);
    mask: var(--mask);
    content: "";
  }
}
</style>
