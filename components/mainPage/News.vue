<template>
    <section class="news">
        <div class="news__container">
            <h2 class="news__title">СТАТЬИ</h2>
            <div class="line"></div>
            <div v-for="item in newsData">
                <div class="news__box">
                    <img class="news__image" :src="item.imageLink" :alt="item.alt">
                    <div class="news__description-container">
                        <p class="news__description-title">{{ item.descriptionNews }}</p>
                        <p class="news__description-text">{{ item.date }}</p>
                    </div>
                </div>
                <div class="line"></div>
            </div>
            <button class="button" @click="() => navigateTo('/articles')">ВСЕ СТАТЬИ</button>

        </div>
    </section>
</template>
    
<script setup lang='ts'>
import { newsData } from '../../utils/header/data';
</script>
    
<style lang="scss">
.news {
    width: 1600px;
    display: flex;
    margin: 120px auto 0 auto;
}

.news__container {
    width: 1200px;
    margin: 0 auto 0px auto;
    display: flex;
    flex-direction: column;
}

.news__title {
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: $whitetext;
    padding: 0;
    margin: 0px auto 60px 0;
}

.line {
    width: 100%;
    border-bottom: 1px $grey solid;
    margin-bottom: 30px;
}

.news__box {
    display: flex;
    gap: 30px;
    margin: 0 0 30px 0;
}

.news__image {
    width: 380px;
    height: 240px;
    border-radius: 12px;
}

.news__description-container {
    display: flex;
    flex-direction: column;
    margin: auto 0 auto 0;
    height: 190px;
    justify-content: space-between;
}

.news__description-title {
    font-family: 'Roboto', sans-serif;
    line-height: 19px;
    font-size: 16px;
    font-weight: 500;
    color: $greytext;
    padding: 0;
    margin: 0;
    max-width: 455px;
}

.news__description-text {
    font-family: 'Roboto', sans-serif;
    line-height: 14px;
    font-size: 16px;
    font-weight: 300;
    color: $greytext;
    padding: 0;
    margin: 0;
    max-width: 455px;
}
</style>