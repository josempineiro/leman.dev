<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: "column",
    validator: (value) => ["column", "row"].includes(value),
  },
  padding: {
    type: String,
    default: undefined,
    validator: (value) => ["xs", "sm", "md", "lg"].includes(value),
  },
  margin: {
    type: String,
    default: undefined,
    validator: (value) => ["xs", "sm", "md", "lg"].includes(value),
  },
  color: {
    type: String,
    default: "secondary",
    validator: (value) => ["primary", "secondary", "accent"].includes(value),
  },
});
const classes = computed(() => {
  return {
    separator: true,
    "separator-column": props.direction === "column",
    "separator-row": props.direction === "row",
    "separator-p-xs": props.padding === "xs",
    "separator-p-sm": props.padding === "sm",
    "separator-p-md": props.padding === "md",
    "separator-p-lg": props.padding === "lg",
    "separator-m-xs": props.margin === "xs",
    "separator-m-sm": props.margin === "sm",
    "separator-m-md": props.margin === "md",
    "separator-m-lg": props.margin === "lg",
    "separator-color-primary": props.color === "primary",
    "separator-color-secondary": props.color === "secondary",
    "separator-color-accent": props.color === "accent",
  };
});
</script>

<style lang="scss">
.separator {
  display: flex;
  opacity: 0.5;
}

.separator-color-primary {
  background-color: var(--separator-color-primary);
}
.separator-color-secondary {
  background-color: var(--separator-color-secondary);
}
.separator-color-accent {
  background-color: var(--separator-color-accent);
}

.separator-row {
  width: 100%;
  height: 1px;
  .separator-p-xs {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .separator-p-sm {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .separator-p-md {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .separator-p-lg {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .separator-m-xs {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .separator-m-sm {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .separator-m-md {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .separator-m-lg {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
.separator-column {
  height: 100%;
  width: 1px;
  .separator-p-xs {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .separator-p-sm {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .separator-p-md {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .separator-p-lg {
    padding-left: 2rem;
    padding-bottom: 2rem;
  }
  .separator-m-xs {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .separator-m-sm {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .separator-m-md {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .separator-m-lg {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
