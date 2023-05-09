<script setup>
import ErrorDisigning from '~/components/fieldPage/errorDisigning.vue';

definePageMeta({
    layout: "header",
});
</script>

<template>
    <ClientOnly>
        <div class="page">
            <div class="container ">
                <MenuUnderHeader />
                <FieldPageCardNavigation />
                <FieldPageHealhtFieldSystem />
                <FieldPageHealhtFieldSystem2 />
            </div>
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
        <div class="container">
            <FieldPageItpAndAutomatic />
            <FieldPageTestingAndTrials />
        </div>
        <MainPageNews />
    </ClientOnly>
</template>
<style scoped lang="scss">
.page {
    width: 1600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
    background-image: url(../assets/images/hotFieldsPage/Group_8.png);
    background-repeat: no-repeat;
    background-position: right top;
}

.container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}
</style>