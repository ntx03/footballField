<script setup>
import ErrorDisigning from '~/components/fieldPage/errorDisigning.vue';

definePageMeta({
    layout: "header",
});

const goStartPage = () => {
    window.scrollTo(0, 0);
}
</script>

<template>
    <ClientOnly>
        <div class="page">
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
            <div class="container">
                <FieldPageItpAndAutomatic />
                <FieldPageTestingAndTrials />
            </div>
            <MainPageNews />
            <button class="button__start-page" @click="goStartPage">B начало</button>
        </div>
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
    position: relative;
}

.container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}

.button__start-page {
    position: fixed;
    top: 80%;
    right: 15vh;
    background-color: $yellow;
    border-radius: 12px;
    height: 40px;
    width: 100px;
    cursor: pointer;
    border: none;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $black;
    font-weight: 400;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
    }
}
</style>