<template >
    <section class="section__container">
        <div class="text__container">
            <p class="text">Полностью монолитная однородная система (монтируется с помощью раструбной и стыковой
                сварки) не подверженная коррозии и гниению – все элементы имеют одинаковое температурное удлинение что не
                вызывает нарушения герметичности соединений (отсутствие резьбовых и компрессионных фитингов).</p>
            <p class="text text_second">Универсальность системы позволяет настраивать ее под
                различные
                типы покрытий без
                вмешательства в основание футбольного поля и оборудование ИТП. При замене искусственного газона с различными
                наполнителями (SBR, геофил, песок) и длиной ворса или замене натурального газона на искусственный и наоборот
                отсутствует необходимость во вмешательстве в основание футбольного поля и систему дренажа. Адаптация системы
                происходит настройками системы автоматизации или модернизацией теплообменника (источника тепла).</p>
        </div>
        <div class="field-heating__container">
            <h2 class="field-heating__title">ПОДОГРЕВ ПОЛЕЙ</h2>
            <p class="field-heating__text">Первая в России система для стандартного футбольного поля размерами 110 х72
                метра,
                спроектированная под тепловую нагрузку 1 Гкал (поле №4 с искусственным газоном на стадионе им Э.А.
                Стрельцова (Торпедо) г. Москва).</p>
            <div class="field-heating__card-container">
                <img class="field-heating__image" src="../../assets/images/mainPage/Rectangle_32.png"
                    alt="трава на футбольном поле" />
                <div class="field-heating__image-description-container">
                    <p class="field-heating__image-description-title">20 ЛЕТ</p>
                    <p class="field-heating__image-description-text">Гарантийный срок на систему подогрева</p>
                    <p class="field-heating__image-description-title">БЕСПЛАТНО</p>
                    <p class="field-heating__image-description-text">Поиск и устранение утечки в течении 20 лет бесплатно
                    </p>
                    <p class="field-heating__image-description-title">НЕ МЕНЕЕ 10 ЛЕТ</p>
                    <p class="field-heating__image-description-text">Срок службы теплоносителя</p>
                </div>
            </div>
            <div class="field-heating__card-container">
                <div class="field-heating__image-description-container">
                    <p class="field-heating__image-description-text field-heating__image-description-text_w500">ПЕРВАЯ В
                        РОССИИ СИСТЕМА ДЛЯ СТАНДАРТНОГО ФУТБОЛЬНОГО ПОЛЯ РАЗМЕРАМИ 110Х72 МЕТРА</p>
                    <p class="field-heating__image-description-text field-heating__image-description-text_w500">Первая в
                        России система для стандартного футбольного поля размерами 110 х72 метра, спроектированная под
                        тепловую нагрузку 1 Гкал (поле №4 с искусственным газоном на стадионе им Э.А. Стрельцова (Торпедо)
                        г. Москва).</p>
                    <p class="field-heating__image-description-text field-heating__image-description-text_w500">Первая в
                        России система для стандартного футбольного поля размерами 110 х72 метра</p>
                    <button class="button" @click="() => navigateTo('/fieldsheating')">ПОДРОБНЕЕ</button>
                </div>
                <img class="field-heating__image" src="../../assets/images/mainPage/Rectangle_27.png"
                    alt="трава на футбольном поле" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.section__container {
    display: flex;
    flex-direction: column;
    width: 1600px;
    margin: 0px auto 0px auto;
}

.text__container {
    display: flex;
    width: 1200px;
    margin: 120px auto 120px auto;
    gap: 66px;
}

.text {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: $greytext;
    padding: 0;
    margin: 0;
    max-width: 530px;

    &_second {
        max-width: 600px;
        font-size: 16px;
        line-height: 19px;
    }

}

.field-heating__container {
    max-width: 1200px;
    margin: 0 auto 0px 200px;
    display: flex;
    flex-direction: column;
}

.field-heating__title {
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    color: $whitetext;
    padding: 0;
    margin: 0 auto 60px 0;
}

.field-heating__text {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: $greytext;
    padding: 0;
    margin: 0 auto 50px 0;
    max-width: 500px;
}

.field-heating__card-container {
    display: flex;
    margin: 0 0 60px 0;
    gap: 60px;

}

.field-heating__image {
    border-radius: 12px;
    width: 600px;
    height: 350px;
}

.field-heating__image-description-container {
    display: flex;
    flex-direction: column;
    width: 600px;
}

.field-heating__image-description-title {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: $greytext;
    padding: 0;
    margin: 0 auto 10px 0;
}

.field-heating__image-description-text {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: $greytext;
    padding: 0;
    margin: 0 auto 30px 0;
    max-width: 239px;

    &_w500 {
        max-width: 500px;
    }
}

.button {
    margin: 50px 0 0 0;
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