<template>
  <template v-if="authenticated">
    <slot />
  </template>
  <template v-else>
    <AppAuthForm />
  </template>
</template>

<script setup lang="ts">
const authenticated = useCookie("authenticated");
</script>

<style lang="scss"></style>
