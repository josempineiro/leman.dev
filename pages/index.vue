<template>
  <div class="home">
    <ul class="Menu">
      <li class="Menu_item">
        <Icon size="2rem" name="gg:internal" color="currentColor" />
        <NuxtLink to="/portfolio">portfolio</NuxtLink>
      </li>
      <li class="Menu_item">
        <Icon size="2rem" name="gg:internal" color="currentColor" />
        <NuxtLink to="/cv">curriculum</NuxtLink>
      </li>
      <li class="Menu_item">
        <Icon size="2rem" name="gg:internal" color="currentColor" />
        <NuxtLink to="/contact">contact</NuxtLink>
      </li>
    </ul>
    <div class="Brand">Leman<span class="Brand_dot">.</span>dev</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "centered",
});
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100vh;

  max-width: 1024px;
}
.Brand {
  font-family: var(--font-family);
  color: var(--color-secondary);
  margin-bottom: 1rem;
  position: fixed;
  bottom: 0;
  left: 2rem;
}
@keyframes blink {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}
.Brand_dot {
  animation: blink 1s infinite;
}
.Menu {
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 auto;
  gap: 1rem;
}
.Menu_item {
  list-style: none;
  margin: 0 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: var(--color-secondary);
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.Menu_item svg {
  transition: all 0.2s ease-in-out;
}

.Menu_item svg {
  opacity: 0;
}
.Menu_item:hover svg {
  opacity: 1;
}

@media screen and (max-width: 767px) {
  .Brand {
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.04em;
  }
}
@media screen and (min-width: 768px) {
  .Brand {
    font-size: 10rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.04em;
  }
}
</style>
