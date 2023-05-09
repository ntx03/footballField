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

