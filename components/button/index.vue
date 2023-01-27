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
});

const classes = computed(() => {
  return {
    Button: true,
    [`Button--${props.color}`]: true,
    [`Button--${props.variant}`]: true,
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

  &[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
  &--current {
    --color: currentColor;
    --invert-color: var(--color-background);
  }
  &--primary {
    --color: var(--color-primary);
    --invert-color: var(--color-background);
  }
  &--secondary {
    --color: var(--color-secondary);
    --invert-color: var(--color-background);
  }
  &--text {
    border: 1px solid transparent;
    background-color: transparent;
    color: var(--color);
  }
  &--outline {
    border: 1px solid var(--color);
    background-color: transparent;
    color: var(--color);
  }
  &--fill {
    border: 1px solid var(--color);
    background-color: var(--color);
    color: var(--invert-color);
  }
}
</style>
