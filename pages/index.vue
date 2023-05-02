<script setup>

definePageMeta({
    layout: "header",
});
</script>

<template>
    <ClientOnly>
        <MainPageFieldHeating />
        <MainPageDesigning />
        <MainPageAbout />
        <MainPageNews />
    </ClientOnly>
</template>

<style scoped lang="scss"></style>