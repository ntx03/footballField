<script setup>
import { articlesData } from '../../utils/articlesPageData';
import image from '../../assets/images/articlesPage/Rectangle_91.png'
const newsData = ref({
    data: '4 февраля 2023',
    title: 'Первая в России система для стандартного футбольного поля размерами 110 х72 метра',
    description: ['Территория «Торпедо» переживает второе рождение. Исторический стадион перестраивается по самым современным стандартам комфорта и безопасности. Его превратят в футбольную арену для проведения соревнований всероссийского и международного уровня – IV (высшей) категории по классификации УЕФА и I категории по классификации РФС.', 'Первая в России система для стандартного футбольного поля размерами 110 х72 метра, спроектированная под тепловую нагрузку 1 Гкал(поле №4 с искусственным газоном на стадионе им Э.А.Стрельцова(Торпедо) г.Москва)', 'Рядом со стадионом появятся 3 тренировочных поля – полноразмерное (105х68 м) и 2 уменьшенных (60х40 м) с искусственным газоном класса FIFA Quality Pro.'],
    image: image,
})
const chooseNews = (item) => {
    newsData.value.data = item.data;
    newsData.value.title = item.title;
    newsData.value.description = item.description;
    newsData.value.image = item.image;
    navigateTo({ path: '/articles', hash: '#articles' })
}
</script>

<template>
    <div class="wrapper">
        <h2 class="title">Статьи</h2>
        <div class="article__container">
            <div class="title-image__container">
                <img class="image" :src="newsData.image" alt="Стадион">
            </div>
            <div class="article-description__container">
                <p class="description__data">{{ newsData.data }}</p>
                <p class="description__title">{{ newsData.title }}</p>
                <p class="description__text" v-for="item in newsData.description">{{ item }}</p>
            </div>
        </div>

        <div class="cards__container">
            <div class="card__container" v-for="item in articlesData" @click="chooseNews(item)">
                <div class="card-image__container">
                    <img class="image" :src="item.image" :alt="item.title">
                </div>
                <p class="card__title">{{ item.title }}</p>
                <p class="card__data">{{ item.data }}</p>
            </div>
        </div>
        <PaginationComponent />
    </div>
</template>
    
<style scoped lang="scss">
.wrapper {
    margin: 120px auto 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.title {
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto 0 0;

}

.article__container {
    display: flex;
    margin: 60px auto 0 auto;
    width: 100%;
    gap: 60px;
}

.title-image__container {
    width: 540px;
    height: 400px;
    position: relative;
    border-radius: 12px;
    margin: 0;
    display: flex;
}

.image {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    position: absolute;
    border-radius: 12px;
}

.article-description__container {
    display: flex;
    flex-direction: column;
    margin: auto auto auto 0;
    max-width: 500px;
}

.description__data {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $greytext;
    font-weight: 300;

}

.description__title {
    margin: 40px auto 10px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: $whitetext;
    font-weight: 500;
    text-align: start;
}

.description__text {
    margin: 20px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $whitetext;
    font-weight: 400;
    text-align: start;
}

.cards__container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 60px auto 0 auto;
}

.card__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;

}

.card-image__container {
    position: relative;
    width: 100%;
    border-radius: 12px;
    padding-top: 60%;
    margin: 0 auto 0 auto;
    border-radius: 12px;
}

.card__title {
    margin: 20px auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $greytext;
    font-weight: 400;
    text-align: start;
}

.card__data {
    margin: 10px auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $greytext;
    font-weight: 300;
}
</style>