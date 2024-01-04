<template>
  <div
    :class="{
      background: true,
      background_stopped: stop,
    }"
  >
    <template v-for="(_, index) in [...Array(50)]" :key="index">
      <div
        class="background-icon"
        @click="selectProject(projects[index % projects.length])"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${index * 1}s`,
        }"
      >
        <Icon
          size="3rem"
          :name="icons[index % icons.length]"
          color="currentColor"
        />
      </div>
    </template>
  </div>
</template>
<script setup>
const icons = ref([
  "mdi:react",
  "mdi:vuejs",
  "teenyicons:nextjs-solid",
  "mdi:nuxt",
  "logos:vercel",
  "mdi:language-javascript",
  "mdi:language-typescript",
  "mdi:language-python",
  "mdi:graphql",
  "dashicons:rest-api",
  "simple-icons:css3",
  "simple-icons:html5",
  "simple-icons:tailwindcss",
  "simple-icons:styledcomponents",
  "fa6-brands:sass",
  "mdi:git",
]);

const stop = ref(false);

function selectProject(event) {
  if (event.target.classList.contains("background-icon")) {
    debugger;
    event.stopPropagation();
    stop.value = true;
  }
}
</script>
<style lang="scss" scoped>
.background {
  background-color: var(--bg-color);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.background-icon {
  border-radius: 50%;
  position: absolute;
  animation: fall 10s linear infinite;
  color: var(--text-color-secondary);
  opacity: 0;
  top: 0;
}

.background_stopped .background-icon {
  animation-play-state: paused;
}

@keyframes fall {
  0% {
    opacity: 0.05;
    top: calc(100% + 3rem);
    transform: rotate(360deg);
  }
  100% {
    opacity: 0.05;
    transform: transformX(-50%) rotate(0deg);
    top: -3rem;
  }
}
</style>
