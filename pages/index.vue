<template>
    <div class="p-4">
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
