<template>
  <Button v-bind="$props" :class="classes" :style="style">
    <slot />
  </Button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    position?:
      | "fixed"
      | "absolute"
      | "relative"
      | "static"
      | "sticky"
      | "initial";
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  }>(),
  {
    position: "initial",
    top: "initial",
    right: "initial",
    bottom: "initial",
    left: "initial",
  }
);
const classes = computed(() => {
  return {
    ButtonFloat: true,
    [`ButtonFloat_${props.position}`]: true,
  };
});
const style = computed(() => {
  return {
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
  };
});
</script>

<style lang="scss">
.ButtonFloat_fixed {
  position: fixed;
}
.ButtonFloat_absolute {
  position: absolute;
}
.ButtonFloat_relative {
  position: relative;
}
.ButtonFloat_static {
  position: static;
}
.ButtonFloat_sticky {
  position: sticky;
}
</style>
