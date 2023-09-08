<template>
  <transition
    name="collapsable"
    @before-enter="startTransition"
    @enter="enterTransition"
    @after-enter="afterEnterTransition"
    @before-leave="beforeLeaveTransition"
    @leave="leaveTransition"
    @after-leave="afterLeaveTransition"
  >
    <template v-if="collapsed">
      <div class="collapsable-content">
        <slot />
      </div>
    </template>
  </transition>
</template>

<script setup>
defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});

function startTransition(el) {
  el.style.height = "0px";
  el.style.opacity = "0";
}

function enterTransition(el) {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
}

function afterEnterTransition(el) {
  el.style.height = "auto";
}

function beforeLeaveTransition(el) {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
}
function leaveTransition(el) {
  el.style.height = "0px";
  el.style.opacity = "0";
}
function afterLeaveTransition(el) {
  el.style.height = "";
}
</script>

<style lang="scss">
.collapsable-active,
.collapsable-leave-active,
.collapsable-enter-active {
  will-change: height, opacity;
  transition-property: height, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}

.collapsable-enter-from {
  height: 0px;
  opacity: 0;
}

.collapsable-content {
  overflow: hidden;
}
</style>
