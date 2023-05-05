<template>
    <div class="contacts__wrapper">
        <h2 class="title">контакты</h2>
        <div class="text__wrapper">
            <p class="text">ФЕСПО — российская продукция, разработанная для систем подогрева плоскостных сооружений</p>
            <p class="text">Мы находимся в центре городской жизни Москвы.Заходите к нам в офис, звоните по указанным номерам
                ниже,
                либо напишите нам на почту.</p>
            <p class="text text_uppercase">Мы всегда вам рады.</p>
        </div>
        <div class="contacts__container">
            <div class="contacts-box">
                <p class="contacts-box__title ">Адрес:</p>
                <p class="contacts-box__text mt-20">г. Москва, ул 3-я Тверская-Ямская,пер. Александра Невского д. 32</p>
                <p class="contacts-box__title mt-30">Телефон:</p>
                <p class="contacts-box__text mt-20">+7 (495) 888-32-11</p>
                <p class="contacts-box__text">+7 (955) 032-25-18</p>
                <p class="contacts-box__title mt-30">E-mail:</p>
                <p class="contacts-box__text mt-20">fespo@gmail.com</p>
            </div>
            <div class="contacts-box">
                <p class="contacts-box__title">Реквизиты:</p>
                <p class="contacts-box__text mt-20">ИП СУХОРУКОВ ИВАН ЮРЬЕВИЧ
                    ИНН 503125254923
                    ОГРНИП 319508100109740</p>
                <p class="contacts-box__text mt-20">Юридический адрес:
                    Российская Федерация, 142470, МОСКОВСКАЯ ОБЛ, НОГИНСКИЙ Р-Н, ПГТ НОГИНСК-5, -, дом 32, кв. 64</p>
            </div>
        </div>
    </div>
</template>
    
<script setup>

</script>
    
<style scoped lang="scss">
.contacts__wrapper {
    margin: 120px auto -60px auto;
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

.text__wrapper {
    margin: 60px auto 0 0;
    display: flex;
    flex-direction: column;
}

.text {
    margin: 0 auto 20px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $whitetext;
    font-weight: 400;
    max-width: 500px;

    &_uppercase {
        text-transform: uppercase;
    }
}

.contacts__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column-start: auto;
    margin: 60px auto 0 auto;
}

.contacts-box {
    display: flex;
    flex-direction: column;
    max-width: 340px;
}

.contacts-box__title {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $greytext;
    font-weight: 400;
}

.contacts-box__text {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: $whitetext;
    font-weight: 400;
}

.mt-20 {
    margin-top: 20px;
}

.mt-30 {
    margin-top: 30px;
}
</style>