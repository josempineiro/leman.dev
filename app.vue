<template>
  <NuxtLayout>
    <AppAuthenticator>
      <google-font href="https://fonts.googleapis.com/css2?family=Roboto" />

      <NuxtPage />
    </AppAuthenticator>
  </NuxtLayout>
</template>
<style lang="scss">
@for $i from 1 through 10 {
  .page-enter-active a:nth-child(#{$i}n),
  .page-leave-active a:nth-child(#{$i}n) {
    transition-delay: #{$i * 0.1}s;
  }
}

.page-enter-active a,
.page-leave-active a {
  transition: all 0.2s;
  opacity: 1;
}

.page-enter-from a,
.page-leave-to a {
  opacity: 0;
}
</style>
