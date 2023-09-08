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
  wrap: {
    type: Boolean,
    default: false,
  },
});
const classes = computed(() => {
  return {
    row: true,
    "row-align-center": props.align === "center",
    "row-align-start": props.align === "start",
    "row-align-end": props.align === "end",
    "row-justify-center": props.justify === "center",
    "row-justify-start": props.justify === "start",
    "row-justify-end": props.justify === "end",
    "row-justify-between": props.justify === "space-between",
    "row-justify-around": props.justify === "space-around",
    "row-justify-evenly": props.justify === "space-evenly",
    "row-gap-xs": props.gap === "xs",
    "row-gap-sm": props.gap === "sm",
    "row-gap-md": props.gap === "md",
    "row-gap-lg": props.gap === "lg",
    "row-p-xs": props.padding === "xs",
    "row-p-sm": props.padding === "sm",
    "row-p-md": props.padding === "md",
    "row-p-lg": props.padding === "lg",
    "row-wrap": props.wrap,
  };
});
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.row-wrap {
  flex-wrap: wrap;
}

.row-align-center {
  align-items: center;
}
.row-align-start {
  align-items: flex-start;
}
.row-align-end {
  align-items: flex-end;
}

.row-justify-start {
  justify-content: flex-start;
}
.row-justify-end {
  justify-content: flex-end;
}
.row-justify-center {
  justify-content: center;
}
.row-justify-between {
  justify-content: space-between;
}
.row-justify-around {
  justify-content: space-around;
}
.row-justify-evenly {
  justify-content: space-evenly;
}

.row-gap-xs {
  gap: 0.25rem;
}
.row-gap-sm {
  gap: 0.5rem;
}
.row-gap-md {
  gap: 1rem;
}
.row-gap-lg {
  gap: 2rem;
}

.row-p-xs {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.row-p-sm {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.row-p-md {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.row-p-lg {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
