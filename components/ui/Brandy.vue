<template>
  <div class="brand">
    <Text
      class="brand-text"
      typography="monospace"
    >
      <span ref="text" class="brand-ref">{{ brand }}</span>
      <template v-for="(letter, letterIndex) in brand" :key="letterIndex">
        <span
          :class="{
            'brand-char': true,
          }"
          :style="getLetterStyles(letterIndex)"
        >
          {{ letter }}
        </span>
      </template>
    </Text>
  </div>
</template>
<script setup>
const text = ref(null);
const brand = ref("lemandev");
const percentPos = ref({
  x: 0.5,
  y: 0.5,
});

function mouseMove (event) {
  const documentRect = event.target.getBoundingClientRect();
  const percentPostX = (event.clientX - documentRect.x) / documentRect.width;
  const percentPostY = (event.clientY - documentRect.y) / documentRect.height;
  percentPos.value = {
    x: percentPostX,
    y: percentPostY,
  };
}
const brandLength = computed(() => brand.value.length);

function getLetterDistance(letterIndex) {
  const distance = 1 / brandLength.value;
  return Math.abs(distance * letterIndex + distance / 2 - percentPos.value.x);
}
function getLetterStyles(letterIndex) {
  const distance = getLetterDistance(letterIndex);
  return {

    paddingInline:
      `${Math.max(0, (0.5 * distance))}em`,
    transform: `scaleX(${1 + Math.max(0, (1 * distance))}) scaleY(${
            1 + Math.max(0, (1 * distance))
          }) translateZ(0)`
  }
}

onMounted(() => {
  document.addEventListener("mousemove", mouseMove);
});
onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMove);
});
</script>
<style lang="scss" scoped>
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-weight: 300; 
  pointer-events: none;
}
.brand-ref {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  user-select: none;
}
.brand-text {
  cursor: pointer;
}
.brand-char {
  display: inline-block;
  transform-origin: center;
  transition: all 0.1s ease-in-out;
}

</style>
