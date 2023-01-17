<template>
  <Strip :items="items">
    <Avatar />
  </Strip>
</template>

<script setup>

const items = [
  {
    id: 1,
    to: "/",
    media: "🏙️",
    title: "I was born in",
    description: "Galicia, Spain",
  },
  {
    id: 2,
    to: "/developer",
    media: "📍",
    title: "I'm currently living in",
    description: "Lisbon, Portugal",
  },
  {
    id: 3,
    to: "/education",
    media: "🎓",
    title: "I studied Computer Engineering",
    description: "at the University of Coruña",
  },
];

</script>

