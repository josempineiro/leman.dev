<template>
  <ul class="List">
    <li
      v-for="item in items"
      :key="getItemId(item)"
      :data-id="getItemId(item)"
      :class="[
        {
          ListItem: true,
          List_current: getItemId(item) === getItemId(selectedItem),
        },
      ]"
      @click="$emit('click-item', item)"
    >
      <slot name="item" :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: any[];
  selectedItem: any;
  getItemId: (item: any) => string;
}>();

onMounted(() => {
  document
    .querySelector(`[data-id="${props.getItemId(props.selectedItem)}"]`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
});
onUpdated(() => {
  document
    .querySelector(`[data-id="${props.getItemId(props.selectedItem)}"]`)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
});
</script>
<style lang="scss">
.List {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  .ListItem {
    width: 100%;
    max-height: 200px;
    &.List_current {
      background-color: #f5f5f5;
      box-shadow: 0 0 0px 5px rgb(255 255 255), 0 0 0px 10px rgb(0 0 0);
    }
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
