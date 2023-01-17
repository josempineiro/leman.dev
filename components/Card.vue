<template>
  <div class="Card">
    <div class="Media">
      <slot name="media" />
    </div>
    <div class="Content">
      <div class="Title">
        <slot name="title" />
      </div>
      <div class="Description">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script setup>



</script>

<style lang="scss">
.Card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;

  gap: 2rem;


  .Media {
    font-size: 2em;
    display: flex;
    align-items: center;
  }

  .Content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5em;

    .Title {
      font-size: 1.2em;
      font-weight: 700;
      color: #192b55
    }

    .Description {
      font-size: 1em;
      font-weight: 400;

      color: #2f4475;
      max-width: 60ch;
      white-space: initial;
    }
  }
}
</style>
