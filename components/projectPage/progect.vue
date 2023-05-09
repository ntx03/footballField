<template>
    <div class="progect__container">
        <div class="progect-description__container">
            <h2 class="progect__title">стадион «Торпедо» им. Э.а. Стрельцова </h2>
            <div class="wrapper__text">
                <p class="progect__text">Территория «Торпедо» переживает второе рождение. Исторический стадион
                    перестраивается
                    по самым современным стандартам комфорта и безопасности. Его превратят в футбольную арену для проведения
                    соревнований всероссийского и международного уровня – IV (высшей) категории по классификации УЕФА и I
                    категории по классификации РФС.</p>
                <p class="progect__text">Первая в России система для стандартного футбольного поля размерами 110 х72 метра,
                    спроектированная под тепловую нагрузку 1 Гкал (поле №4 с искусственным газоном на стадионе им Э.А.
                    Стрельцова (Торпедо) г. Москва)</p>
                <p class="progect__text">Рядом со стадионом появятся 3 тренировочных поля – полноразмерное (105х68 м) и 2
                    уменьшенных (60х40 м) с искусственным газоном класса FIFA Quality Pro.</p>
            </div>
            <div class="description__container">
                <div class="description-item__container">
                    <p class="description__title">3 поля</p>
                    <p class="description__text">На территории арены</p>
                </div>
                <div class="description-item__container">
                    <p class="description__title">42 тыс. м2</p>
                    <p class="description__text">Площадь стадиона</p>
                </div>
                <div class="description-item__container">
                    <p class="description__title">2025 год</p>
                    <p class="description__text">Запланированное завершение</p>
                </div>
            </div>
            <button class="description__button" @click="() => navigateTo('/designing')">посмотреть другие проекты</button>
        </div>
        <div class="progect-image__container">
            <img class="progect__image" src="../../assets/images/progectPage/stadionImage.png" alt="стадион">
        </div>
    </div>
    <div class="guarantee__container">
        <h2 class="progect__title">гарантия </h2>
        <div class="guarantee__container-text">
            <div class="text__box">
                <p class="text__subtitle">Гарантийный срок на систему подогрева 20 лет!</p>
                <p class="guarantee__text">При выполнении монтажных работ ООО СК Феаген или официальным представителем, в
                    случае нарушения герметичности системы подогрева в течении 20 лет поиск и устранение утечки бесплатно
                    (при выявленном браке продукции или монтажа)!</p>
            </div>
            <div class="text__box">
                <p class="guarantee__text">Предусмотрены эффективная замена теплоносителя и поиск проколов.
                    Разработанный теплоноситель имеет только функциональные в рабочих режимах добавки и обладает
                    люминесценцией, что облегчает поиск утечек. Обладает защитными свойствами для металлических поверхностей
                    оборудования ИТП, не агрессивен к уплотнителям. Срок службы не менее 10 лет.</p>
            </div>
        </div>
    </div>
</template>
    
<style scoped lang="scss">
.progect__container {
    display: flex;
    margin: 120px auto 0 auto;
    gap: 100px;
}

.progect-description__container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0;
}

.progect__title {
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto 0 0;
}

.wrapper__text {
    display: flex;
    flex-direction: column;
    margin: 60px 0 0 0;
}

.progect__text {
    margin: 0 auto 20px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $whitetext;
    font-weight: 400;
}

.description__container {
    display: flex;
    gap: 40px;
    margin: 60px auto 0 auto;
}

.description-item__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.description__title {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    line-height: 42px;
    color: $greytext;
    font-weight: 400;
    //text-transform: uppercase;
    white-space: nowrap;
}

.description__text {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $greytext;
    font-weight: 400;
    text-align: start;
    max-width: 110px;
}

.description__button {
    width: 350px;
    height: 55px;
    border: 1px $yellow solid;
    color: $yellow;
    background-color: $backround;
    border-radius: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    margin: 60px auto 0 0;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
        border: 1px $backround solid;
        color: $whitetext;
        background-color: $yellow;
        cursor: pointer;
    }
}

.progect-image__container {
    width: 600px;
    height: 512px;
    display: flex;
    margin: 0;
    border-radius: 12px;
    position: relative;
}

.progect__image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}

.guarantee__container {
    margin: 120px auto 0 auto;
    width: 1200px;
    display: flex;
    flex-direction: column;
}

.guarantee__container-text {
    display: flex;
    margin: 60px auto 0 auto;
    gap: 100px;
    width: 100%;
}

.text__box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
}

.text__subtitle {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;
}

.guarantee__text {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $whitetext;
    font-weight: 400;
    text-align: start;
}
</style>