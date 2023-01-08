<template>
    <div class="Layout">
        Custom layout defined with <code>definePageMeta</code>

        <NuxtLink to="/">
            Back to home
        </NuxtLink>
    </div>
</template>

<script>
definePageMeta({
    layout: 'default'
})
</script>

<style lang="scss">
.Layout {
    background-color: transparent;
}
</style>

