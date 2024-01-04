<template>
  <div class="contact-page">
    <app-header>
      <NuxtLink to="/">
        <Icon size="2rem" name="ep:back" color="currentColor" />
      </NuxtLink>
      <span class="Layout_title">
        {{ title }}
      </span>
    </app-header>
    <h2 class="contact-title">CONNECT WITH ME</h2>
    <ul class="contacts">
      <li class="contact">
        <a href="https://www.linkedin.com/in/josempineiro/" target="_blank">
          <Icon size="4rem" name="mdi:linkedin" color="currentColor" />
        </a>
      </li>
      <li class="contact">
        <a href="https://www.github.com/josempineiro" target="_blank">
          <Icon size="4rem" name="mdi:github" color="currentColor" />
        </a>
      </li>
      <li class="contact">
        <a href="https://www.instagram.com/leman.dev" target="_blank">
          <Icon size="4rem" name="mdi:instagram" color="currentColor" />
        </a>
      </li>
      <li class="contact">
        <a href="https://www.twitter.com/navylemux" target="_blank">
          <Icon size="4rem" name="mdi:twitter" color="currentColor" />
        </a>
      </li>
      <li class="contact">
        <a href="mailto:navylemux@gmail.com" target="_blank">
          <Icon size="4rem" name="mdi:email" color="currentColor" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "centered",
});
</script>
<style>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  max-width: 1024px;
}
.contact-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.contacts {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
@media screen and (max-width: 768px) {
  .contacts {
    flex-direction: column;
  }
}
</style>
