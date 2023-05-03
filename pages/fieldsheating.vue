<script setup>
import ErrorDisigning from '~/components/fieldPage/errorDisigning.vue';

definePageMeta({
    layout: "header",
});
</script>
<template>
    <div class="container">
        <MenuUnderHeader />
        <FieldPageCardNavigation />
        <FieldPageHealhtFieldSystem />
        <FieldPageHealhtFieldSystem2 />
    </div>
    <MainPageDesigning />
    <div class="container">
        <FieldPageMainHeating />
    </div>
    <HowMeWork />
    <div class="container">
        <ErrorDisigning />
        <FieldPageOperation />
    </div>
    <YourQuestion />
</template>
<style scoped lang="scss">
.container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}
</style>