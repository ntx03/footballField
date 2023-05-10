<script setup>
import { dataCards } from '~/utils/designPageData';
import { useStateCardsDesigning } from '../composables/designing/useCardsDesigning';

const { log } = console;

const showPagination = ref(true);
const showCountMaxPage = ref(true);
const countPagePaginations = ref(1);

const cardsDesigning = useStateCardsDesigning();


// сколько страниц 
const lengthPage = Math.ceil(dataCards.length / 9);

//если карточек больше 9, то показываем пагинацию
(dataCards.length / 9) > 1 ? showPagination.value = true : showPagination.value = false;

//если страниц больше 5, то показываем общее количество страниц
lengthPage > 2 ? showCountMaxPage.value = true : showCountMaxPage.value = false;


// создаем массивы на основании количества карточек на странице
const arrPagination = () => {
    const arr = [];
    for (let i = 1; i <= lengthPage; i++) {
        arr.push(i);
    }
    return arr;
};

const numberDisabled = (item) => {
    return item !== countPagePaginations.value;
}

const buttonBackDisabled = () => {
    return countPagePaginations.value < 2;
}

const buttonFowardDisabled = () => {
    return countPagePaginations.value == lengthPage;
}
const backPage = () => {
    countPagePaginations.value = countPagePaginations.value - 1
}

const goPage = () => {
    countPagePaginations.value = countPagePaginations.value + 1
}
/**
 * начало цикла пагинации
 */
const start = () => {
    if (countPagePaginations.value === 1) {
        return 0;
    } else {
        return (countPagePaginations.value - 1) * 9;
    }
}
/**
 * сколько целых страниц
 */
const pages = Math.floor(dataCards.length / 9);
/**
 * сколько будет карточек в на последней странице
 */
const lastCards = dataCards.length - pages * 9;
/**
 * конец цикла пагинации
 */
const end = () => {
    if (countPagePaginations.value !== lengthPage) {
        return start() + 8;
    } else return start() + lastCards - 1;

}
/**
 * находим массив с карточками в зависимости от страницы пагинации
 */
const arrCards = () => {
    const arr = [];
    for (let i = start(); i <= end(); i++) {
        arr.push(dataCards[i]);
    }
    cardsDesigning.value = arr;
}
arrCards();

watch(countPagePaginations, () => {
    arrCards();
})

</script>

<template>
    <div class="pagination" v-show="showPagination">
        <div class="pagination__container">
            <button class="pagination__button" :class="{ 'pagination__button_disabled': buttonBackDisabled() }"
                :disabled="buttonBackDisabled()" @click="backPage"><img class="button__icon_back"
                    src="../assets/images/desighingPage/Arrow_forward.svg" alt="стрелка назад"></button>

            <div class="number__container">
                <p class="number" :class="{ 'number_disabled': numberDisabled(item) }" v-for="item in arrPagination()">{{
                    item }}</p>
                <p class="number number_disabled" v-show="showCountMaxPage">... {{ lengthPage }}</p>
            </div>

            <button class="pagination__button" :class="{ 'pagination__button_disabled': buttonFowardDisabled() }"
                :disabled="buttonFowardDisabled()" @click="goPage"><img class="button__icon"
                    src="../assets/images/desighingPage/Arrow_forward.svg" alt="стрелка вперед"></button>
        </div>
    </div>
</template>
    
<style scoped lang="scss">
.pagination {
    display: flex;
    gap: 30px;
    margin: 60px auto 0 auto;
    width: 100%;
}

.pagination__container {
    display: flex;
    gap: 30px;
    margin: 0 auto 0 auto;
}

.pagination__button {
    border: none;
    background-color: inherit;
    cursor: pointer;

    &_disabled {
        opacity: 0.5;
        cursor: auto;
    }

    // &:hover {
    //     cursor: pointer;
    // }
}

.button__icon {
    width: 40px;

    &_back {
        width: 40px;
        transform: rotate(180deg);
    }
}

.number__container {
    display: flex;
    gap: 15px;
    //border: 1px red solid;
}

.number {
    color: $yellow;
    height: 21px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;

    &_disabled {
        opacity: 0.5;
    }
}
</style>