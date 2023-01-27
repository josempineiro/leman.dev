<template>
  <TechnologyIcon :id="technology.id" />
</template>

<script setup lang="ts">
import type { Technology } from "~/types/technology";

const props = defineProps<{
  technology: Technology;
}>();
</script>

<style></style>
