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
    media: "ππΌ",
    title: "Hello! I am",
    description: "Jose PiΓ±eiro, aka Leman.",
  },
  {
    id: 2,
    to: "/developer",
    media: "π¨π»βπ»",
    title: "I'm a front end developer.",
    description: "Currently working at YepCode",
  },
  {
    id: 3,
    to: "/portfolio",
    media: "π«",
    title: "Portfolio",
  },
  {
    id: 3,
    to: "/aboutme",
    media: "π«",
    title: "Contact me",
    description: "at email",
  },
];
</script>
