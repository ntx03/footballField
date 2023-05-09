<script setup>
import { dataCards } from '~/utils/designPageData';

const goProject = () => {
    navigateTo('/pageproject');
}
</script>

<template>
    <section class="section">
        <h2 class="title">проектирование</h2>
        <p class="text">За 20 лет нашей работы мы выполнили более 400 проектов по всей России. Наша продукция на стадионах
            различного уровня: олимпийский стадион «Фишт» г.Сочи, центральные стадионы крупных городов (Москва, Челябинск,
            Пермь, Тамбов…), тренировочные поля к ЧМ 2018 по футболу, футбольные поля профессиональных и любительских
            клубов,
            площадки для пляжных видов спорта, частные заказы.</p>
        <div class="cards__container">
            <div class="card__container" v-for="item in dataCards" @click="goProject">
                <img class="image" :src="item.image" :alt="item.alt">
                <div class="text__box">
                    <h3 class="card__title">{{ item.title }}</h3>
                    <p class="card__text">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
    
<style scoped lang="scss">
.section {}

.title {
    margin: 120px auto 0 0;
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;

}

.text {
    margin: 60px auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $whitetext;
    font-weight: 400;
    max-width: 500px;
}

.cards__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: (1fr);
    width: 100%;
    gap: 30px;
    margin: 60px auto 0 auto;
}

.card__container {
    width: 100%;
    position: relative;
    display: flex;
}

.text__box {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    opacity: 0;

    &:hover {
        background-color: rgba($color: $yellow, $alpha: 0.7);
        opacity: 1;
        cursor: pointer;
        border-radius: 12px;
    }
}

.card__title {
    margin: 20px auto 0 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $black;
    font-weight: 500;
    max-width: 230px;
    z-index: 1;
    text-align: start;

}

.card__text {
    margin: 20px auto 0 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $black;
    font-weight: 400;
    max-width: 310px;
    z-index: 1;
    text-align: start;
}
</style>