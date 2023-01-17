<template>
  <Strip :items="items">
    <Avatar />
  </Strip>
</template>

<script setup>

const items = [
  {
    id: 2,
    to: "/university",
    media: "💻",
    title: "I graduated in",
    description: "Computer Engineering at the University of Coruña",
  },
  {
    id: 3,
    to: "/aboutme",
    media: "🎓",
    title: "As Final Degree Project",
    description: "I developed an application to classify and detect atypical network traffic using Artificial Intelligence",
  },
  {
    id: 1,
    to: "/erasmus",
    media: "🇮🇹",
    title: "I was on Erasmus in ",
    description: "Genova, Italy",
  },
];

</script>
