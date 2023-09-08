<template>
  <div
    :class="[
      'scrollable-container',
      neverScrolled ? '_never-scrolled' : '_scrolled',
    ]"
    ref="container"
  >
    <ButtonFloat
      v-if="position > 0"
      class="scroll-up-button"
      color="accent"
      variant="outline"
      top="0.5rem"
      left="50%"
      @click="scrollTop"
    >
      ↑
    </ButtonFloat>
    <div class="scrollable-content" ref="content">
      <slot />
    </div>
    <ButtonFloat
      v-if="position + 1 < maxScroll"
      class="scroll-down-button"
      color="accent"
      bottom="0.5rem"
      left="50%"
      variant="outline"
      @click="scrollDown"
    >
      ↓
    </ButtonFloat>
  </div>
</template>

<script>
export default {
  name: "Scrollable",
  data: () => ({
    position: 0,
    maxScroll: 0,
    neverScrolled: true,
    resizeObserver: null,
  }),
  mounted() {
    this.resizeObserver = new ResizeObserver(this.handleResize);
    this.resizeObserver.observe(this.$refs.container);

    this.$refs.container.addEventListener("mouseleave", this.scrollTop);
    this.$refs.content.addEventListener("scroll", this.handleScroll);
    this.maxScroll =
      this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
  },
  beforeUnmount() {
    // Limpia el listener cuando el componente se destruye
    this.$refs.content.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleResize() {
      this.maxScroll =
        this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
    },
    handleScroll() {
      this.position = Math.round(this.$refs.content.scrollTop);
      console.log(this.position);
      console.log(this.maxScroll);
      if (this.neverScrolled) {
        this.neverScrolled = false;
      }
    },
    scrollTop() {
      this.$refs.content.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollDown() {
      this.$refs.content.scrollTo({
        top: this.$refs.content.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.scrollable-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.scrollable-content {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.scroll-down-button,
.scroll-up-button {
  height: 2rem;
  transform: translateX(-50%);
  position: absolute;
  background-color: var(--surface-color);
  backdrop-filter: blur(4px);
}

.scrollable-container._never-scrolled .scroll-up-button,
.scrollable-container._never-scrolled .scroll-down-button {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    transform: translate3d(-50%, 0, 0);
  }
  50% {
    transform: translate3d(-50%, -0.5rem, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
