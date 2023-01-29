<template>
  <div
    class="Roulette"
    :style="{
      width: `${radius * 2}px`,
      height: `${radius * 2}px`,
    }"
  >
    <TransitionGroup
      name="list"
      appear
      tag="ul"
      class="RouletteItems"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li
        v-for="(item, index) in items"
        class="RouletteItem"
        :id="item.id"
        :style="itemStyles[index]"
        :data-index="index"
        :data-angle="(index * (2 * Math.PI)) / items.length"
        :key="item.id"
      >
        <slot name="item" :item="item" />
      </li>
    </TransitionGroup>
    <div class="RouletteContent">
      <slot />
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  rotate: {
    type: Boolean,
    default: true,
  },
  items: {
    type: Array,
    required: true,
  },
  radius: {
    type: Number,
    default: 200,
  },
  itemRadius: {
    type: Number,
    default: 50,
  },
});

const itemOffsetX = computed(() => {
  return props.itemRadius + props.radius;
});

const itemStyles = computed(() => {
  return props.items.map((_, index) => {
    const angle = index * ((2 * Math.PI) / props.items.length);
    return {
      width: `${props.itemRadius}px`,
      height: `${props.itemRadius}px`,
      transform: `translate3d(${
        props.radius -
        props.itemRadius / 2 +
        itemOffsetX.value * Math.cos(angle)
      }px,${
        props.radius -
        props.itemRadius / 2 +
        itemOffsetX.value * Math.sin(angle)
      }px,0)`,
    };
  });
});

function onEnter(el, done) {
  const angle = el.dataset.angle;
  const index = el.dataset.index;
  gsap.to(el, {
    duration: 0.2,
    delay: index * 0.1,
    onComplete: done,
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    x:
      props.radius + itemOffsetX.value * Math.cos(angle) - props.itemRadius / 2,
    y:
      props.radius + itemOffsetX.value * Math.sin(angle) - props.itemRadius / 2,
  });
}

function onAppear(el, done) {
  const angle = el.dataset.angle;
  const index = el.dataset.index;
  gsap.to(el, {
    duration: 0.2,
    delay: index * 0.1,
    onComplete: done,
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    x:
      props.radius + itemOffsetX.value * Math.cos(angle) - props.itemRadius / 2,
    y:
      props.radius + itemOffsetX.value * Math.sin(angle) - props.itemRadius / 2,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.2,
    onComplete: done,
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0.5,
    x: props.radius - props.itemRadius / 2,
    y: props.radius - props.itemRadius / 2,
  });
}

function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 0,
    x: props.radius - props.itemRadius / 2,
    y: props.radius - props.itemRadius / 2,
  });
}
function onAfterEnter(el) {
  const angle = el.dataset.angle;
  gsap.to(el, {
    duration: 0.2,
    x:
      props.radius + itemOffsetX.value * Math.cos(angle) - props.itemRadius / 2,
    y:
      props.radius + itemOffsetX.value * Math.sin(angle) - props.itemRadius / 2,
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
  });
}
</script>

<style lang="scss">
.Roulette {
  position: relative;

  .RouletteContent {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }

  .RouletteItems {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .RouletteItem {
    position: absolute;
    transition: 0.2s all ease;
    transform: translate3d(
      var(--translate-x),
      var(--translate-y),
      var(--translate-z)
    );
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes angle {
  0% {
    transform: translate3d(
        var(--translate-x),
        var(--translate-y),
        var(--translate-z)
      )
      rotate(360deg);
  }
  100% {
    transform: translate3d(
        var(--translate-x),
        var(--translate-y),
        var(--translate-z)
      )
      rotate(0deg);
  }
}
</style>
