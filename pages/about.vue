<template>
    <section class="about-page">
        <div class="about__container">
            <MenuUnderHeader />
            <AboutComponent />
        </div>
    </section>
    <HowMeWork />
    <Awards />
    <YourQuestion />
    <News />
</template>
    
<script setup>
import News from '~/components/mainPage/News.vue';
definePageMeta({
    layout: 'header',
})
</script>
    
<style scoped lang="scss">
.about-page {
    width: 1600px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    background-image: url(../assets/images/desighingPage/Group_8.png);
    background-position: top right;
    background-repeat: no-repeat;
}

.about__container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}
</style>