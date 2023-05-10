<script setup>
import TheFooter from '~/components/TheFooter.vue';
import mainImage from "../assets/images/mainPage/main.png";
import mainImage2 from '../assets/images/hotFieldsPage/main2.png';
import mainImage3 from '../assets/images/desighingPage/main3.png';
import mainImage4 from '../assets/images/progectPage/headerProgect.png'
import mainImage6 from '../assets/images/articlesPage/headerImageArticles.png'
import mainImage5 from '../assets/images/aboutPage/headerImage.png';
import mainImage7 from '../assets/images/contactsPage/headerImageContacts.png';


import { phoneNumber, headerDataText, menuItem } from '~/utils/header/data';
import { useActiveFootbalPage } from '~/composables/header/useActiveFootbalPage';
import { useActiveMainPage } from '~/composables/header/useActiveMainPage';
import { useAboutHeader } from '../composables/header/useAboutHeader';
import { useArticlesHeader } from '../composables/header/useArticlesHeader';
import { useContactsHeader } from '../composables/header/useContactsHeader';
import { getScrollWidth } from '../utils/header/data';

const footbal = useActiveFootbalPage();
const designing = useActiveMainPage();
const about = useAboutHeader();
const articles = useArticlesHeader();
const contacts = useContactsHeader();

const statePopup = useStatePopup();
const route = useRoute();
const show = ref(true);
const regex = /fieldsheating/;
const regexProgect = /pageprogect/;
const regexDesigning = /designing/;
const regexArticles = /articles/;
const articlesMatch = regexArticles.test(route.fullPath);

route.fullPath === '/fieldsheating' ? footbal.value = true : footbal.value = false;
route.fullPath === '/designing' ? designing.value = true : designing.value = false;
route.fullPath === '/about' ? about.value = true : about.value = false;
articlesMatch ? articles.value = true : articles.value = false;
route.fullPath === '/contacts' ? contacts.value = true : contacts.value = false;

watch(route, () => {
  const fieldsheatingMatch = regex.test(route.fullPath);
  const designingMatch = regexDesigning.test(route.fullPath);
  const articlesMatch = regexArticles.test(route.fullPath);
  if (route.fullPath === '/') {
    designing.value = false;
    footbal.value = false;
  }
  fieldsheatingMatch ? footbal.value = true : footbal.value = false;
  designingMatch ? designing.value = true : designing.value = false;
  route.fullPath === '/about' ? about.value = true : about.value = false;
  articlesMatch ? articles.value = true : articles.value = false;
  route.fullPath === '/contacts' ? contacts.value = true : contacts.value = false;

})


const getText = () => {
  const fieldsheatingMatch = regex.test(route.fullPath);
  const progectMatch = regexProgect.test(route.fullPath);
  const designingMatch = regexDesigning.test(route.fullPath);
  const articlesMatch = regexArticles.test(route.fullPath);
  const baskround = ref(`background-image: url('${mainImage}')`);
  if (route.fullPath === '/') {
    show.value = true;
    baskround.value = `background-image: url('${mainImage}')`
    return { title: headerDataText[0].title, text: headerDataText[0].text, baskround: baskround.value };
  }
  if (fieldsheatingMatch) {
    show.value = true;
    baskround.value = `background-image: url('${mainImage2}')`
    return { title: headerDataText[1].title, text: headerDataText[1].text, baskround: baskround.value };
  }
  if (designingMatch) {
    show.value = true;
    baskround.value = `background-image: url('${mainImage3}')`
    return { title: headerDataText[2].title, text: headerDataText[2].text, baskround: baskround.value };
  }
  if (progectMatch) {
    show.value = false;
    baskround.value = `background-image: url('${mainImage4}')`
    return { title: '', text: '', baskround: baskround.value };
  }
  if (route.fullPath === '/about') {
    show.value = false;
    baskround.value = `background-image: url('${mainImage5}')`
    return { title: '', text: '', baskround: baskround.value };
  }
  if (articlesMatch) {
    show.value = false;
    baskround.value = `background-image: url('${mainImage6}')`
    return { title: '', text: '', baskround: baskround.value };
  }
  if (route.fullPath === '/contacts') {
    show.value = false;
    baskround.value = `background-image: url('${mainImage7}')`
    return { title: '', text: '', baskround: baskround.value };
  }
};
/**
 * 
 * закрываем модальное окно
 */
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
* Открываем модальное окно 
*/
const openCustomPopup = (e) => {
  const page = document.querySelector("body");
  e.preventDefault();
  page.style.overflow = "hidden";
  page.style.paddingRight = `${getScrollWidth()}px`
  page.addEventListener("keydown", closeEsc);
  statePopup.value = false;

}
</script>

<template>
  <ClientOnly>
    <header class="header" :class="{ 'header_heigth500': !show }" :style="getText().baskround" id="container">
      <div class="header__box">
        <NuxtLink to="/"><img class="header__logo" src="../assets/images/mainPage/ФЕСПО.png" alt="fespo_logo" />
        </NuxtLink>
        <div class="header__box-menu">
          <header-item-menu :link="menuItem[0].link" :name="menuItem[0].name" :active="footbal" />
          <header-item-menu :link="menuItem[1].link" :name="menuItem[1].name" :active="designing" />
          <header-item-menu :link="menuItem[2].link" :name="menuItem[2].name" :active="about" />
          <header-item-menu :link="menuItem[3].link" :name="menuItem[3].name" :active="articles" />
          <header-item-menu :link="menuItem[4].link" :name="menuItem[4].name" :active="contacts" />
        </div>
        <div class="header__box-number">
          <a :href="`tel:${item.link}`" class="phone-number" v-for="item in phoneNumber">{{ item.text }}</a>
        </div>
      </div>
      <div class="title-box">
        <p class="title">{{ getText().title }}</p>
      </div>
      <div class="text-box">
        <p class="text">{{ getText().text }}</p>
      </div>
      <div class="button-box" v-show="show">
        <button class="button" @click="openCustomPopup">ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </header>
    <slot />
    <TheFooter />
  </ClientOnly>
</template>

<style scoped lang="scss">
.header {
  width: 1600px;
  margin: 0px auto 0px auto;
  height: 710px;

  &_heigth500 {
    height: 500px;
  }
}

.header__box {
  display: flex;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  justify-content: space-between;
}

.header__box-menu {
  display: flex;
  gap: 30px;
}

.header__box-number {
  gap: 5px;
  display: flex;
  flex-direction: column;

  .phone-number {
    font-family: 'Prosto One', cursive;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: $whitetext;
  }
}

.header__logo {
  &:hover {
    cursor: pointer;
  }
}

.header__logo_footer {
  margin: 0px 166px 0px 0px;
}

.title-box {
  display: flex;
  max-width: 1200px;
  margin: 95px auto 0px auto;
}

.title {
  font-family: 'Prosto One', cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  max-width: 770px;
  padding: 0;
  margin: 0;
}

.text-box {
  display: flex;
  max-width: 1200px;
  margin: 40px auto 0px auto;
}

.text {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  max-width: 570px;
  padding: 0;
  margin: 0;
  color: $greytext;
}

.button-box {
  display: flex;
  max-width: 1200px;
  margin: 60px auto 0px auto;
}

.button {
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
