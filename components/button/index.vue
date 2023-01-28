<template>
  <NuxtLink v-if="href" :to="href" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :class="classes">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "current",
    validator: (value) => ["current", "primary", "secondary"].includes(value),
  },
  variant: {
    type: String,
    default: "text",
    validator: (value) => ["text", "outline", "fill"].includes(value),
  },
  width: {
    type: String,
    default: "auto" | "full",
  },
});

const classes = computed(() => {
  return {
    Button: true,
    Button__current: props.color === "current",
    Button__primary: props.color === "primary",
    Button__secondary: props.color === "secondary",
    Button__text: props.variant === "text",
    Button__outline: props.variant === "outline",
    Button__fill: props.variant === "fill",
    Button__full: props.width === "full",
    Button__auto: props.width === "auto",
  };
});
</script>

<style lang="scss">
.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.Button__current {
    --color: currentColor;
    --invert-color: var(--color-background);
  }
  &.Button__primary {
    --color: var(--color-primary);
    --invert-color: var(--color-background);
  }
  &.Button__secondary {
    --color: var(--color-secondary);
    --invert-color: var(--color-background);
  }
  &.Button__text {
    border: 1px solid transparent;
    background-color: transparent;
    color: var(--color);
  }
  &.Button__outline {
    border: 1px solid var(--color);
    background-color: transparent;
    color: var(--color);
  }
  &.Button__fill {
    border: 1px solid var(--color);
    background-color: var(--color);
    color: var(--invert-color);
  }
  &.Button__full {
    width: 100%;
  }
  &.Button__auto {
    width: auto;
  }
  &[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>
