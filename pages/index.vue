<template>
  <Strip :items="items">
    <Avatar />
  </Strip>
</template>

<script setup>
const items = [
  {
    id: 1,
    to: "/aboutme",
    media: "👋🏼",
    title: "Hello! I am",
    description: "Jose Piñeiro, aka Leman.",
  },
  {
    id: 2,
    to: "/developer",
    media: "👨🏻‍💻",
    title: "I'm a front end developer.",
    description: "Currently working at YepCode",
  },
  {
    id: 3,
    to: "/cv",
    media: "📫",
    title: "CV",
  },
  {
    id: 3,
    to: "/aboutme",
    media: "📫",
    title: "Contact me",
    description: "at email",
  },
];
</script>
