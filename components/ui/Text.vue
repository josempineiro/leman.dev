<template>
  <template v-if="html">
    <p v-html="html" :class="classes" />
  </template>
  <template v-else>
    <component :is="is" :class="classes">
      <slot />
    </component>
  </template>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "center",
    validator: (value) => ["primary", "secondary", "accent"].includes(value),
  },
  size: {
    type: String,
    default: undefined,
    validator: (value) => ["xs", "sm", "md", "lg"].includes(value),
  },
  whitespace: {
    type: String,
    default: undefined,
    validator: (value) => ["normal", "pre", "pre-wrap"].includes(value),
  },
  typography: {
    type: String,
    default: undefined,
    validator: (value) => ["number", "monospace"].includes(value),
  },
  is: {
    type: String,
    default: "span",
    validator: (value) =>
      ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6", "code"].includes(
        value
      ),
  },
  html: {
    type: String,
    default: undefined,
  },
});
const classes = computed(() => {
  return {
    text: true,
    "text-color-primary": props.color === "primary",
    "text-color-secondary": props.color === "secondary",
    "text-color-accent": props.color === "accent",
    "text-size-xs": props.size === "xs",
    "text-size-sm": props.size === "sm",
    "text-size-md": props.size === "md",
    "text-size-lg": props.size === "lg",
    "text-size-xl": props.size === "xl",
    "text-whitespace-normal": props.whitespace === "normal",
    "text-whitespace-pre": props.whitespace === "pre",
    "text-whitespace-pre-wrap": props.whitespace === "pre-wrap",
    "text-typography-number": props.typography === "number",
    "text-typography-monospace": props.typography === "monospace",
  };
});
</script>

<style lang="scss">
.text {
  margin: 0;
  font-family: var(--font-family);
}
.text-typography-number,
.text-typography-monospace {
  font-family: monospace;
}
.text-color-primary {
  color: var(--text-color-primary);
}
.text-color-secondary {
  color: var(--text-color-secondary);
}
.text-color-accent {
  color: var(--text-color-accent);
}
.text-size-xs {
  font-size: 0.6rem;
}
.text-size-sm {
  font-size: 0.8rem;
}
.text-size-md {
  font-size: 1rem;
}
.text-size-lg {
  font-size: 1.2rem;
}
.text-size-xl {
  font-size: 1.5rem;
}
.text-whitespace-normal {
  white-space: normal;
}
.text-whitespace-pre {
  white-space: pre;
}
.text-whitespace-pre-wrap {
  white-space: pre-wrap;
}
</style>
