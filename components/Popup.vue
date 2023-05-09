<template>
    <ClientOnly>
        <div class="popup" :class="{ popup_none: statePopup }">
            <div class="popup__container">
                <h2 class="popup__title">заявка на бесплатную консультацию </h2>
                <div class="popup__comment-container">
                    <input type="text" class="input" placeholder="Имя" />
                    <input type="text" class="input" placeholder="Телефон" />
                    <input type="text" class="input" placeholder="E-mail" />
                    <div>
                        <button class="popup__button" @click="closePopup">оставить заявку</button>
                        <p class="button__text-footer">Нажимая на кнопку вы соглашаетесь с <span class="span">политикой
                                конфиденциальности</span></p>
                    </div>
                </div>

            </div>
            <div id="overlay_profile" class="popup__overlay" @click="closePopup"></div>
        </div>
    </ClientOnly>
</template>

<script setup>
const statePopup = useStatePopup();


const closeEsc = (e) => {
    const page = document.querySelector("body");
    if (e.keyCode === 27) {
        // надо вставить конкретный стейт конкретного модального окна
        statePopup.value = true;
        page.removeEventListener("keydown", closeEsc);
        page.style.overflow = "";
        page.style.paddingRight = `0px`;
    }
};

/**
 * Закрываем модальное окно
 */
function closePopup() {
    const page = document.querySelector("body");
    page.style.overflow = "";
    page.style.paddingRight = `0px`;
    statePopup.value = true;
    page.removeEventListener("keydown", closeEsc);
}

</script>

<style scoped lang="scss">
.popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-right: 15px;
    transition: 0.2s;
}

.popup__container {
    width: 560px;
    z-index: 1;
    margin: 30vh auto auto auto;
    background-color: $black;
    border-radius: 12px;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
    padding: 0 0 10px 0;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 12px;
}

.popup_none {
    opacity: 0;
    visibility: hidden;
    width: 1px;
    height: 1px;
}

.popup__title {
    font-family: 'Prosto One', cursive;
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    margin: 50px auto 0px auto;
    color: $whitetext;
    text-transform: uppercase;

}

.popup__button {
    //display: flex;
    width: 460px;
    height: 65px;
    border: none;
    background-color: $yellow;
    color: $whitetext;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 60px;
    font-weight: 500;
    border-radius: 12px;
    margin: 20px auto 0 auto;
    transition: 0.5s;
    text-transform: uppercase;
    //padding: 5px 0 0 22px;

    &:hover {
        opacity: 0.8;
    }
}

.popup__button-delete {
    width: 80px;
    height: 25px;
    border: none;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    background-color: #dc3545;
    color: white;
    border-radius: 5px;
    margin: 0 0 10px 0;
    transition: 0.5s;

    &:hover {
        opacity: 0.8;
    }
}

.popup__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    cursor: pointer;
}

.popup__comment-container {
    display: flex;
    flex-direction: column;
    max-width: 460px;
    margin: 40px auto 50px auto;

    gap: 20px;

    &:first-child {
        border-top: 1px gray solid;
    }
}

.popup__text-container {
    display: flex;
    gap: 10px;
    margin: 5px 20px 0px 20px;
    border-bottom: 1px gray solid;

    &:last-child {
        border-bottom: none;
    }
}

.popup__text {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    margin: 10px auto 20px 20px;
    text-align: start;
    width: 90%;
    min-height: 10px;
    word-break: normal;
    overflow-x: scroll;
}

.popup__text::-webkit-scrollbar {
    width: 0;
}

.popup__text {
    -ms-overflow-style: none;
}

.popup__text-user {
    font-size: 11px;
    line-height: 15px;
    font-weight: 400;
    text-align: start;
    width: 90%;
    margin: 10px auto 0px 0px;
}

.input {
    height: 55px;
    border-radius: 12px;
    padding: 0;
    margin: 0;
    border: none;
    font-family: 'Roboto', sans-serif;
    background-color: $whitetext;
    border: $grey 1px solid;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 21px;
    color: $black;
    font-weight: 400;
    padding: 17px 17px 17px 20px;

    &::placeholder {
        color: #a3a3a3;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 21px;
        //color: $whitetext;
        opacity: 0.8;

    }
}

.button__text-footer {
    margin: 20px auto 0 auto;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 19px;
    color: $whitetext;
    font-weight: 500;
    max-width: 260px;
    text-align: center;
    transition: 0.3s;


}

.span {
    color: $yellow;
    font-weight: 500;
    cursor: pointer;
}
</style>