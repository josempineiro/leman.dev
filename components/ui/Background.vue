<template>
  <div class="background">
    <template v-for="(_, index) in [...Array(50)]" :key="index">
      <div
        class="background-icon"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * index + 0.5}s`,
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
</script>
<style lang="scss" scoped>
.background {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background-icon {
  border-radius: 50%;
  position: absolute;
  animation: fall 10s linear infinite;
  color: var(--text-color-secondary);
  opacity: 0;
  top: 0;
}

@keyframes fall {
  0% {
    opacity: 0.1;
    transform: translateY(100vh) rotate(360deg);
  }
  100% {
    opacity: 0.1;
    transform: translateY(-20px) rotate(0deg);
  }
}
</style>
