<template>
    <section class="designing__container">
        <div class="designing__wrapper-card-slider">
            <h2 class="designing__title">ПРОЕКТИРОВАНИЕ</h2>
            <div class="designing__card__container">
                <img class="designing__image" src="../../assets/images/mainPage/Rectangle_29.png" alt="футбольное поле">
                <img class="designing__image" src="../../assets/images/mainPage/Rectangle_30.png"
                    alt="газон футбольного поля">
                <img class="designing__image" src="../../assets/images/mainPage/Rectangle_31.png" alt="стадион">
            </div>
            <button class="button">ПОСМОТРЕТЬ ВСЕ ПРОЕКТЫ</button>
        </div>
    </section>
</template>
    
<script setup >

</script>
    
<style lang="scss" scoped>
.designing__container {
    width: 1600px;
    height: 715px;
    display: flex;
    background-image: url('../../assets/images/mainPage/Rectangle_44.png');
    margin: 0 auto 0 auto;
}

.designing__wrapper-card-slider {
    max-width: 1200px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;

}

.designing__title {
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: $whitetext;
    padding: 0;
    margin: 60px auto 60px 0;
}

.designing__card__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 30px;
    width: 100%;
    margin: 0 0 60px 0;
}

.designing__image {
    width: 100%;
    height: 100%;
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

    &:hover {
        background-color: $yellow;
        color: $whitetext;
        cursor: pointer;
        opacity: 0.9;
    }
}
</style>