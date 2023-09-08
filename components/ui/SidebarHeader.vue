<template>
  <div class="sidebar-header" ref="target">
    <Col align="center" gap="sm">
      <Avatar class="cv-photo" />
      <Text is="h3" color="primary" whitespace="pre" size="lg"
        >Jose Piñeiro</Text
      >
      <Text color="secondary" whitespace="pre">Frontend Engineer</Text>
    </Col>
  </div>
  <Teleport to="body">
    <Transition>
      <div v-if="!isIntersecting" class="sidebar-sticky-header">
        <Avatar class="sidebar-avatar" />
        <Col align="center" gap="sm">
          <Text is="h3" color="primary" whitespace="pre" size="lg"
            >Jose Piñeiro</Text
          >
          <Text color="secondary" whitespace="pre">Frontend Engineer</Text>
        </Col>
        <Button>
          <Icon size="2rem" name="mdi:message" color="white" />
        </Button>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const target = ref(null);
    const observer = ref(null);
    const isIntersecting = ref(false);

    onMounted(() => {
      observer.value = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isIntersecting.value = entry.isIntersecting;
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }
      );

      const observe = () => {
        if (target.value) {
          observer.value.observe(target.value);
        }
      };
      observe();
    });

    onUnmounted(() => {
      unobserve();
    });

    return {
      target,
      isIntersecting,
    };
  },
};
</script>
<style>
.sidebar-header {
  background-color: var(--surface-color);
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 0%;
  padding: 1rem 0;
}

.sidebar-sticky-header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.sidebar-avatar {
  width: 4rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
