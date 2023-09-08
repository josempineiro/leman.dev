<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  align: {
    type: String,
    default: "start",
    validator: (value) => ["start", "center", "end"].includes(value),
  },
  justify: {
    type: String,
    default: "start",
    validator: (value) =>
      [
        "start",
        "center",
        "end",
        "space-between",
        "space-around",
        "space-evenly",
      ].includes(value),
  },
  gap: {
    type: String,
    default: undefined,
    validator: (value) => ["xs", "sm", "md", "lg"].includes(value),
  },
  padding: {
    type: String,
    default: undefined,
    validator: (value) => ["xs", "sm", "md", "lg"].includes(value),
  },
});
const classes = computed(() => {
  return {
    col: true,
    "col-align-center": props.align === "center",
    "col-align-start": props.align === "start",
    "col-align-end": props.align === "end",
    "col-justify-center": props.justify === "center",
    "col-justify-start": props.justify === "start",
    "col-justify-end": props.justify === "end",
    "col-justify-between": props.justify === "space-between",
    "col-justify-around": props.justify === "space-around",
    "col-justify-evenly": props.justify === "space-evenly",
    "col-gap-xs": props.gap === "xs",
    "col-gap-sm": props.gap === "sm",
    "col-gap-md": props.gap === "md",
    "col-gap-lg": props.gap === "lg",
    "col-p-xs": props.padding === "xs",
    "col-p-sm": props.padding === "sm",
    "col-p-md": props.padding === "md",
    "col-p-lg": props.padding === "lg",
  };
});
</script>

<style lang="scss">
.col {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.col-align-center {
  align-items: center;
}
.col-align-start {
  align-items: flex-start;
}
.col-align-end {
  align-items: flex-end;
}

.col-justify-start {
  justify-content: flex-start;
}
.col-justify-end {
  justify-content: flex-end;
}
.col-justify-center {
  justify-content: center;
}
.col-justify-between {
  justify-content: space-between;
}
.col-justify-around {
  justify-content: space-around;
}
.col-justify-evenly {
  justify-content: space-evenly;
}

.col-gap-xs {
  gap: 0.25rem;
}
.col-gap-sm {
  gap: 0.5rem;
}
.col-gap-md {
  gap: 1rem;
}
.col-gap-lg {
  gap: 2rem;
}
.col-p-xs {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.col-p-sm {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.col-p-md {
  padding-left: 1rem;
  padding-right: 1rem;
}
.col-p-lg {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
