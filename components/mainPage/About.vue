<template>
    <section class="about">
        <div class="about__data-container">
            <h2 class="about__title">О КОМПАНИИ</h2>
            <div class="about__card-container">
                <div class="about__description__container">
                    <p class="about__text">Зарождение технологии началось в стенах МЭИ ТУ в 2002-2003 годах, первые системы
                        уже отработали более 15 лет без утечек и сбоев.</p>
                    <p class="about__text">Выполнена на стадионах различного уровня: олимпийский стадион «Фишт» г.Сочи,
                        центральные стадионы крупных городов (Москва, Челябинск, Пермь, Тамбов…), тренировочные поля к ЧМ
                        2018 по футболу, футбольные поля профессиональных и любительских клубов, площадки для пляжных видов
                        спорта, частные заказы.</p>
                    <button class="button" @click="() => navigateTo('/about')">ПОДРОБНЕЕ</button>
                </div>
                <img class="about__image" src="../../assets/images/mainPage/Rectangle_33.png" alt="белая каска">
            </div>
        </div>
    </section>
</template>
    
<style lang="scss">
.about {
    width: 1600px;
    display: flex;
    margin: 0 auto 0 auto;
}

.about__data-container {
    width: 1200px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
}

.about__title {
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: $whitetext;
    padding: 0;
    margin: 60px auto 60px 0;
}

.about__card-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.about__description__container {
    display: flex;
    flex-direction: column;
    max-width: 600px;

}

.about__text {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: $greytext;
    padding: 0;
    margin: 10px auto 20px 0;
    max-width: 500px;
}

.about__image {
    width: 600px;
    height: 326px;
    border-radius: 12px;
}

.button {
    margin: 0px 0 0 0;
    width: 350px;
    height: 55px;
    background-color: inherit;
    border: $yellow 1px solid;
    border-radius: 12px;
    color: $yellow;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    transition: 0.5s;
    margin: 40px 0px 0px 0px;

    &:hover {
        background-color: $yellow;
        color: $whitetext;
        cursor: pointer;
        opacity: 0.9;
    }
}
</style>