<template>
  <label :class="classes">
    <span v-if="label">{{ label }}</span>
    <input class="FieldInput" v-bind="$attrs" />
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string;
  label: string;
  color: "current" | "primary" | "secondary";
  variant: "text" | "outline" | "fill";
}>();

const classes = computed(() => {
  return {
    FieldInput: true,
    FieldInput__current: props.color === "current",
    FieldInput__primary: props.color === "primary",
    FieldInput__secondary: props.color === "secondary",
    FieldInput__text: props.variant === "text",
    FieldInput__outline: props.variant === "outline",
    FieldInput__fill: props.variant === "fill",
  };
});
</script>

<style lang="scss">
.FormField {
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

  &.FormField__current {
    --color: currentColor;
    --invert-color: var(--bg-color);
  }
  &.FormField__primary {
    --color: var(--color-primary);
    --invert-color: var(--bg-color);
  }
  &.FormField__secondary {
    --color: var(--color-secondary);
    --invert-color: var(--bg-color);
  }
  &.FormField__text {
    border: 1px solid transparent;
    background-color: transparent;
    color: var(--color);
  }
  &.FormField__outline {
    border: 1px solid var(--color);
    background-color: transparent;
    color: var(--color);
  }
  &.FormField__fill {
    border: 1px solid var(--color);
    background-color: var(--color);
    color: var(--invert-color);
  }
  &.FormField__full {
    width: 100%;
  }
  &.FormField__auto {
    width: auto;
  }
  .FieldInput {
    border: none;
    background-color: transparent;
    color: var(--color);
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    width: 100%;
  }
  &[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>
