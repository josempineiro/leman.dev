<template>
  <ul :class="classes">
    <li
      v-for="item in items"
      :key="getItemId(item)"
      :data-id="getItemId(item)"
      :class="[
        {
          ListItem: true,
          List_current:
            selectedItem && getItemId(item) === getItemId(selectedItem),
        },
      ]"
      @click="emit('click-item', item)"
    >
      <slot name="item" :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: any[];
  selectedItem?: any;
  getItemId: (item: any) => string;
  direction?: "row" | "column";
}>();

const classes = computed(() => {
  return {
    List: true,
    List_row: props.direction === "row",
    List_column: props.direction === "column",
  };
});
const emit = defineEmits<{
  (event: "click-item", item: any): void;
}>();
onMounted(() => {
  if (props.selectedItem) {
    document
      .querySelector(`[data-id="${props.getItemId(props.selectedItem)}"]`)
      ?.scrollIntoView({
        block: "center",
      });
  }
});
onUpdated(() => {
  if (props.selectedItem) {
    document
      .querySelector(`[data-id="${props.getItemId(props.selectedItem)}"]`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }
});
</script>
<style lang="scss">
.List {
  display: flex;
  width: 100%;
  &.List_row {
    flex-direction: row;
  }
  &.List_column {
    flex-direction: column;
  }
  .ListItem {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .List {
    .ListItem {
      width: 100%;
    }
  }
}
</style>
