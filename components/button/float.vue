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
    "Button--float": true,
    [`Button--float--${props.position}`]: true,
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
.Button--float--fixed {
  position: fixed;
}
.Button--float--absolute {
  position: absolute;
}
.Button--float--relative {
  position: relative;
}
.Button--float--static {
  position: static;
}
.Button--float--sticky {
  position: sticky;
}
</style>
