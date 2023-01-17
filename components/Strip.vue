<template>
  <div class="Strip">
    <template v-for="item in items" :key="item.id">
      <NuxtLink :to="item.to">
        <Card class="Item" :style="buildStyle(item)">
          <template #media>
            {{ item.media }}
          </template>
          <template #title>
            {{ item.title }}
          </template>
          <template #description>
            {{ item.description }}
          </template>
        </Card>
      </NuxtLink>
    </template>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

function buildStyle(item) {
  const index = props.items.indexOf(item)
  const total = props.items.length
  const itemAngle = 2 * Math.PI / total * index + (5 / 4) * Math.PI
  return {
    left: `${50 + 50 * Math.cos(itemAngle)}%`,
    top: `${50 + 50 * Math.sin(itemAngle)}%`,
    transform: `translate3d(calc(-50% + ${100 * Math.cos(itemAngle)}%), calc(-50% + ${100 * Math.sin(itemAngle)}%), 0) scale(var(--scale))`,
  }
}
</script>
<style lang="scss">
.Strip {
  position: relative;
  width: 400px;
  height: 400px;

  .Card {
    position: absolute;
    width: auto;
    white-space: pre;
    transition: all 0.2s ease-in-out;
    --scale: 1;

    &:hover {
      --scale: 1.1;
    }
  }
}

@media (max-width: 768px) {
  .Strip {
    width: 100%;
    height: auto;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    .Avatar {
      order: 1;
      width: 200px;
      height: 200px;
      align-self: center;
    }

    a {
      order: 2;
    }

    .Card {
      position: initial;
      transform: none !important;
      order: 2;
    }
  }
}
</style>