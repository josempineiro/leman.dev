<template>
  <div
    :class="[
      'scrollable-container',
      neverScrolled ? '_never-scrolled' : '_scrolled',
    ]"
    ref="container"
  >
    <ButtonFloat
      v-if="position > 100"
      class="scroll-up-button"
      color="accent"
      variant="outline"
      bottom="2rem"
      right="2rem"
      @click="scrollTop"
    >
      ↑
    </ButtonFloat>
    <div class="scrollable-content" ref="content">
      <div class="scrollable-wrapper" ref="wrapper">
        <slot />
      </div>
    </div>
    <ButtonFloat
      v-if="position + 1 < maxScroll && false"
      class="scroll-down-button"
      color="accent"
      bottom="2rem"
      right="2rem"
      variant="outline"
      @click="scrollDown"
    >
      ↓
    </ButtonFloat>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Scrollable",
  data: () => ({
    position: 0,
    maxScroll: 0,
    neverScrolled: true,
    resizeObserver: null,
  }),
  mounted() {
    this.resizeObserver = new ResizeObserver(
      _.debounce(this.handleResize, 100)
    );
    this.resizeObserver.observe(this.$refs.container);
    this.resizeObserver.observe(this.$refs.wrapper);

    this.$refs.content.addEventListener("scroll", this.handleScroll);
    this.maxScroll =
      this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
  },
  beforeUnmount() {
    // Limpia el listener cuando el componente se destruye
    this.resizeObserver.disconnect();
    this.$refs.content.removeEventListener("scroll", this.handleScroll);
    this.resizeObserver.disconnect();
  },
  methods: {
    handleResize() {
      this.maxScroll =
        this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
      console.log(this.position);
      console.log("handleResize maxScroll", this.maxScroll);
    },
    handleScroll() {
      this.position = Math.round(this.$refs.content.scrollTop);
      console.log(this.position);
      console.log("handleScroll maxScroll", this.maxScroll);
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
  display: flex;
  flex-direction: column;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border-radius: 20px;
  border: 4px solid var(--bg-color);
}

.scrollable-content {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  display: block;
}
.scroll-down-button,
.scroll-up-button {
  z-index: 1;
  height: 2rem;
  transform: translateX(-50%, -50%);
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
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
