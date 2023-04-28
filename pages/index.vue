<script setup>
definePageMeta({
    layout: "header",
});
</script>

<template>
    <MainPageFieldHeating />
    <section class="designing__container">
        <div class="designing__wrapper-card-slider">
            <h2 class="designing__title">ПРОЕКТИРОВАНИЕ</h2>
            <div class="designing__card__container">
                <img class="designing__image" src="@img" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.designing__container {
    width: 1600px;
    height: 715px;
    display: flex;
    background-image: url('../assets/images/mainPage/Rectangle_44.png');
    margin: 0 auto 0 auto;
}
</style>