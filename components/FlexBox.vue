<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  direction: {
    type: String,
    default: "row",
    validator: (value: string) => {
      return ["row", "column"].includes(value);
    },
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: (value: string) => {
      return [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ].includes(value);
    },
  },
  align: {
    type: String,
    default: "flex-start",
    validator: (value: string) => {
      return ["flex-start", "center", "flex-end"].includes(value);
    },
  },
  wrap: {
    type: String,
    default: "nowrap",
    validator: (value: string) => {
      return ["nowrap", "wrap"].includes(value);
    },
  },
  basis: {
    type: String,
    default: "auto",
    validator: (value: string) => {
      return (
        ["auto", "100%", "1"].includes(value) ||
        value.includes("px") ||
        value.includes("%") ||
        value.includes("rem") ||
        value.includes("em") ||
        value.includes("vh") ||
        value.includes("vw")
      );
    },
  },
  gap: {
    type: String,
  },
  grow: {
    type: Number,
    default: 0,
  },
  w: {
    type: String,
    default: "auto",
    validator: (value: string) => {
      return ["auto", "full"].includes(value);
    },
  },
});
const classes = computed(() => {
  return [
    "FlexBox",
    `FlexBox_direction_${props.direction}`,
    `FlexBox_justify_${props.justify}`,
    `FlexBox_align_${props.align}`,
    `FlexBox_wrap_${props.wrap}`,
    `FlexBox_basis_${props.basis}`,
    `FlexBox_${props.w}`,
    {
      FlexBox_gap_xs: props.gap === "xs",
      FlexBox_gap_sm: props.gap === "sm",
      FlexBox_gap_md: props.gap === "md",
      FlexBox_gap_lg: props.gap === "lg",
    },
  ];
});
</script>
<style lang="scss">
.FlexBox {
  display: flex;

  &.FlexBox_direction_row {
    flex-direction: row;
    .FlexBox_full {
      width: 100%;
    }
  }
  &.FlexBox_direction_column {
    flex-direction: column;
    .FlexBox_full {
      height: 100%;
    }
  }

  &.FlexBox_justify_center {
    justify-content: center;
  }

  &.FlexBox_justify_flex-end {
    justify-content: flex-end;
  }

  &.FlexBox_justify_space-between {
    justify-content: space-between;
  }

  &.FlexBox_justify_space-around {
    justify-content: space-around;
  }

  &.FlexBox_justify_space-evenly {
    justify-content: space-evenly;
  }

  &.FlexBox_align_center {
    align-items: center;
  }

  &.FlexBox_align_flex-end {
    align-items: flex-end;
  }

  &.FlexBox_wrap_wrap {
    flex-wrap: wrap;
  }

  &.FlexBox_basis_full {
    flex-basis: 100%;
  }

  &.FlexBox_basis_auto {
    flex-basis: auto;
  }

  &.FlexBox_basis_1 {
    flex-basis: 1;
  }

  &.FlexBox_basis_0 {
    flex-basis: 0;
  }

  &.FlexBox_grow_1 {
    flex-grow: 1;
  }

  &.FlexBox_grow_0 {
    flex-grow: 0;
  }

  &.FlexBox_full {
    width: 100%;
  }

  &.FlexBox_gap_xs {
    gap: 0.25rem;
  }
  &.FlexBox_gap_sm {
    gap: 0.5rem;
  }
  &.FlexBox_gap_md {
    gap: 1rem;
  }
  &.FlexBox_gap_lg {
    gap: 2rem;
  }
}
</style>
