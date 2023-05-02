<script setup>
definePageMeta({
    layout: "header",
});
</script>
<template>
    <div class="container">
        <MenuUnderHeader />
        <FieldPageCardNavigation />
        <FieldPageHealhtFieldSystem />
    </div>
</template>
<style scoped lang="scss">
.container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}
</style>