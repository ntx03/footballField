<script setup lang='ts'>

</script>
<template>
    <section class="section">
        <div class="section__container">
            <h2 class="title">у вас возникли вопросы?</h2>
            <p class="subtitle">Оставьте заявку на бесплатную консультацию</p>
            <div class="form__container">
                <input type="text" class="input" placeholder="Имя" />
                <input type="text" class="input" placeholder="Телефон" />
                <input type="text" class="input" placeholder="E-mail" />
                <div class="button__container">
                    <button class="form__button">оставить заявку</button>
                    <p class="button__text-footer">Нажимая на кнопку вы соглашаетесь с <span class="span">политикой
                            конфиденциальности</span></p>
                </div>

            </div>
        </div>
    </section>
</template>
    

    
<style scoped lang="scss">
.section {
    background-image: url(../assets/images/hotFieldsPage/bacroundQuestion.png);
    background-repeat: no-repeat;
    background-position: cover;
    width: 1600px;
    margin: 120px auto 0 auto;
    display: flex;
}

.section__container {
    width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}

.title {
    margin: 60px auto 0 0;
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    color: $whitetext;
    font-weight: 400;
    max-width: 600px;
    text-transform: uppercase;
}

.subtitle {
    margin: 60px auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 28px;
    color: $whitetext;
    font-weight: 400;
}

.form__container {
    margin: 50px auto 60px auto;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 350px;
    grid-template-rows: max-content;
}

.input {
    height: 55px;
    border-radius: 12px;
    padding: 0;
    margin: 0;
    border: none;
    font-family: 'Roboto', sans-serif;
    background-color: $black;
    border: $grey 1px solid;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 21px;
    color: $whitetext;
    font-weight: 400;
    padding: 17px 17px 17px 20px;

    &::placeholder {
        color: $greytext;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 21px;
        color: $whitetext;
        opacity: 0.8;

    }
}

.button__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form__button {
    width: 350px;
    height: 55px;
    border-radius: 12px;
    color: $black;
    background-color: $yellow;
    border: none;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }

}

.button__text-footer {
    margin: 0 auto 0 auto;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 19px;
    color: $whitetext;
    font-weight: 400;
    max-width: 250px;
    text-align: center;
    transition: 0.3s;


}

.span {
    color: $yellow;
    font-weight: 300;
    cursor: pointer;
}
</style>