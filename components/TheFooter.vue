<script setup>
import { phoneNumber, menuItem, email, adress } from '~/utils/header/data';
import { useActiveFootbalPage } from '~/composables/header/useActiveFootbalPage';
import { useActiveMainPage } from '~/composables/header/useActiveMainPage';
import { useAboutHeader } from '../composables/header/useAboutHeader';
import { useArticlesHeader } from '../composables/header/useArticlesHeader';
import { useContactsHeader } from '../composables/header/useContactsHeader';

const show = ref(true);

const route = useRoute();

const footbal = useActiveFootbalPage();
const designing = useActiveMainPage();
const about = useAboutHeader();
const articles = useArticlesHeader();
const contacts = useContactsHeader();

route.fullPath === '/contacts' ? show.value = false : show.value = true;

watch(route, () => {
    route.fullPath === '/contacts' ? show.value = false : show.value = true;
})

</script>

<template>
    <footer class="footer">

        <div class="footer__title-box" v-show="show">
            <p class="footer__title">КОНТАКТЫ</p>
        </div>
        <div class="footer__card-container_max-width" v-show="!show">
            <img class="image" src="../assets/images/contactsPage/Group_27.png" alt="карта с местоположением компании" />
        </div>
        <div class="footer__card-container" v-show="show">
            <div class="footer__image-container">
                <img class="place-image" src="../assets/images/mainPage/Rectangle 41.png"
                    alt="карта с местоположением компании" />
                <img class="indicator-image" src="../assets/images/mainPage/ic_baseline-place.svg" alt="указатель" />
            </div>
            <div class="footer__description-container">
                <div class="footer__decription-box">
                    <p class="description__title">Адрес:</p>
                    <p class="description__text">{{ adress }}</p>
                    <p class="description__title">Телефон:</p>
                    <p class="description__text" v-for="item in phoneNumber">{{ item.text }}</p>
                    <p class="description__title">Email:</p>
                    <p class="description__text">{{ email }}</p>
                </div>
            </div>

        </div>
        <div class="footer__menu">
            <div class="footer__menu-container">
                <nuxt-link to="/"><img class="header__logo header__logo_footer" src="../assets/images/mainPage/ФЕСПО.png"
                        alt="fespo_logo" /></nuxt-link>
                <div class="header__box-menu">
                    <header-item-menu :link="menuItem[0].link" :name="menuItem[0].name" :active="footbal" />
                    <header-item-menu :link="menuItem[1].link" :name="menuItem[1].name" :active="designing" />
                    <header-item-menu :link="menuItem[2].link" :name="menuItem[2].name" :active="about" />
                    <header-item-menu :link="menuItem[3].link" :name="menuItem[3].name" :active="articles" />
                    <header-item-menu :link="menuItem[4].link" :name="menuItem[4].name" :active="contacts" />
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    width: 1600px;
    display: flex;
    flex-direction: column;
    margin: 120px auto 0px auto;
    background-image: url('../assets/images/mainPage/Group_14.png');
    background-repeat: no-repeat;
    background-position: left;

    background-color: $backround;
    background-size: 50%;
    border-radius: 20px;
}

.footer__title-box {
    display: flex;
    max-width: 1200px;
    margin: 0px auto 60px 200px;
}

.footer__title {
    font-family: 'Prosto One', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    //max-width: 570px;
    padding: 0;
    margin: 0;
    color: $whitetext;
}

.footer__card-container {
    max-width: 1200px;
    display: grid;
    margin: 0 auto 0 auto;
    grid-template-columns: 790px 377px;
    grid-template-rows: 1fr;
    padding-bottom: 60px;
    box-sizing: border-box;
    gap: 30px;
}

.footer__image-container {
    display: flex;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    //margin: 0 0 60px 0;

}

.place-image {
    display: flex;
    width: 100%;
    box-sizing: border-box;
}

.indicator-image {
    display: flex;
    position: absolute;
    top: 150px;
    left: 480px;
}

.footer__description-container {
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/mainPage/Rectangle_43.svg');
    background-repeat: no-repeat;
    background-size: contain;

}

.footer__decription-box {
    width: 300px;
    margin: 30px auto 0 auto;
    display: flex;
    flex-direction: column;
}

.description__title {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: $greytext;
    margin: 30 0 20px 0;
    padding: 0;
}

.description__text {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: $whitetext;
    margin: 0;
    padding: 0;
}

.footer__menu {
    display: flex;
    width: 1600px;
    background-color: $blacktext;
    height: 120px;
    margin: 0 auto 0 auto;
}

.footer__menu-container {
    display: flex;
    width: 1200px;
    margin: 43px auto 0 200px;
}

.header__logo {
    &:hover {
        cursor: pointer;
    }
}

.header__logo_footer {
    margin: 0px 166px 0px 0px;
}

.header__box-menu {
    display: flex;
    gap: 30px;
}

.footer__card-container_max-width {
    width: 1200px;
    padding-top: 30%;
    display: flex;
    margin: 60px auto 60px auto;
    position: relative;
    border-radius: 12px;
}

.image {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: contain;
    border-radius: 12px;
}
</style>