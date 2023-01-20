<template>
  <div class="Socials">
    <div class="Social">
      <IconGithub /> <span class="hash">josempineiro</span>
    </div>
    <div class="Social">
      <IconTwitter /> <span class="hash">navylemux</span>
    </div>
    <div class="Social">
      <IconLinkedIn /> <span class="hash">josempineiro</span>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.Socials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  .Social {
    display: flex;
    gap: 16px;
    justify-content: space-evenly;
    color: #fff;
  }
}
</style>
