<script setup>
import TheFooter from '~/components/TheFooter.vue';
import mainImage from "../assets/images/mainPage/main.png"
import mainImage2 from '../assets/images/hotFieldsPage/main2.png'

import { phoneNumber, menuItem, headerDataText, email, adress } from '~/utils/header/data';
const route = useRoute();
const getText = () => {
  const baskround = ref(`background-image: url('${mainImage}')`);
  if (route.fullPath === '/') {
    baskround.value = `background-image: url('${mainImage}')`
    return { title: headerDataText[0].title, text: headerDataText[0].text, baskround: baskround.value };
  }
  if (route.fullPath === '/fieldsheating') {
    baskround.value = `background-image: url('${mainImage2}')`
    return { title: headerDataText[1].title, text: headerDataText[1].text, baskround: baskround.value };
  }
};
</script>

<template>
  <ClientOnly>
    <header class="header" :style="getText().baskround">
      <div class="header__box">
        <NuxtLink to="/"><img class="header__logo" src="../assets/images/mainPage/ФЕСПО.png" alt="fespo_logo" />
        </NuxtLink>
        <div class="header__box-menu">
          <header-item-menu :link="item.link" :name="item.name" v-for="item in menuItem" />
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
      <div class="button-box">
        <button class="button">ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </header>
    <slot />
    <the-footer />
  </ClientOnly>
</template>

<style scoped lang="scss">
.header {
  width: 1600px;
  margin: 0px auto 0px auto;
  height: 710px;
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
