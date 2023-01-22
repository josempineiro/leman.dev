<template>
  <div
    class="circle-item-container"
    :style="{
      width: `${radius * 2}px`,
      height: `${radius * 2}px`,
    }"
  >
    <div class="center-item">
      <slot />
    </div>
    <TransitionGroup
      name="list"
      tag="ul"
      :class="{
        items: true,
        rotate: rotate,
      }"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      @after-enter="onAfterEnter"
    >
      <li
        v-for="(item, index) in items"
        class="item"
        :id="item.id"
        :style="itemStyles[index]"
        :data-index="index"
        :data-angle="(index * (2 * Math.PI)) / props.items.length"
        :key="item.id"
      >
        <slot name="item" :item="item" />
      </li>
    </TransitionGroup>
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
  itemWidth: {
    type: Number,
    default: 50,
  },
  itemHeight: {
    type: Number,
    default: 50,
  },
});

const itemPositions = computed(() => {
  const angle = (2 * Math.PI) / props.items.length;
  return props.items.map((_, index) => {
    const currentAngle = index * angle;
    return {
      x: props.radius * Math.cos(currentAngle),
      y: props.radius * Math.sin(currentAngle),
    };
  });
});

const itemStyles = computed(() => {
  return props.items.map((_, index) => {
    return {
      width: `${props.itemWidth}px`,
      height: `${props.itemHeight}px`,
      transform: `translate3d(
        calc(-50% + ${props.radius}px + ${itemPositions.value[index].x}px),
        calc(-50% + ${props.radius}px + ${itemPositions.value[index].y}px),
        0
      )`,
    };
  });
});

function onEnter(el, done) {
  const angle = el.dataset.angle;
  const index = el.dataset.index;
  console.log(el.id);
  gsap.to(el, {
    delay: index * 0.2,
    onComplete: done,
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    x: props.radius + props.radius * Math.cos(angle) - props.itemWidth,
    y: props.radius + props.radius * Math.sin(angle) - props.itemHeight,
  });
}
function onLeave(el, done) {
  const angle = el.dataset.angle;
  const index = el.dataset.index;
  gsap.to(el, {
    delay: index * 0.2,
    onComplete: done,
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0.5,
    x: props.radius + props.radius * 2 * Math.cos(angle) - props.itemWidth,
    y: props.radius + props.radius * 2 * Math.sin(angle) - props.itemHeight,
  });
}
function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 0,
    x: props.radius - props.itemWidth,
    y: props.radius - props.itemHeight,
  });
}
function onAfterEnter(el) {
  console.log("after enter");
  console.log(el.id);
}
</script>

<style lang="scss">
.circle-item-container {
  position: relative;

  .center-item {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    overflow: hidden;
  }

  .items {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.rotate {
      animation: rotate 60s linear infinite;
      .item {
        animation: angle 60s linear infinite;
      }
      &:hover {
        animation-play-state: paused;
        .item {
          animation-play-state: paused;
        }
      }
    }
    .item {
      position: absolute;
      border-radius: 50%;
      transition: 2.6s all ease;
      transform: translate3d(
        var(--translate-x),
        var(--translate-y),
        var(--translate-z)
      );
    }
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
