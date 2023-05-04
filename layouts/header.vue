<script setup>
import TheFooter from '~/components/TheFooter.vue';
import mainImage from "../assets/images/mainPage/main.png";
import mainImage2 from '../assets/images/hotFieldsPage/main2.png';
import mainImage3 from '../assets/images/desighingPage/main3.png';
import mainImage4 from '../assets/images/progectPage/headerProgect.png'


import { phoneNumber, headerDataText, email, adress } from '~/utils/header/data';
import { useActiveFootbalPage } from '~/composables/header/useActiveFootbalPage';
import { useActiveMainPage } from '~/composables/header/useActiveMainPage';

const footbal = useActiveFootbalPage();
const main = useActiveMainPage();

const route = useRoute();
const show = ref(true);
// if (route.fullPath === '/fieldsheating') {
//   footbal.value = true;
// } else {
//   footbal.value = false;
// }

// if (route.fullPath === '/designing') {
//   main.value = true;
// } else {
//   main.value = false;
// }
const count = ref(0);

const click = (e) => {
  // if (route.fullPath === '/fieldsheating') {
  //   footbal.value = true;
  // } else {
  //   footbal.value = false;
  // }
  count.value = count.value + 1;

  if (route.fullPath === '/') {
    main.value = false;
    footbal.value = false
  }
  // route.fullPath === '/' ? footbal.value & main.value = false : null;
  route.fullPath === '/fieldsheating' ? footbal.value = true : footbal.value = false;
  route.fullPath === '/designing' ? main.value = true : main.value = false;
  console.log(menuItem.value);
  console.log(main.value);
  console.log(footbal.value);
  console.log(count.value);
}

const menuItem = ref([
  {
    name: 'Подогрев полей',
    link: '/fieldsheating',
    active: footbal.value
  },
  {
    name: 'Проектирование',
    link: '/designing',
    acvive: main.value
  },
  {
    name: 'О компании',
    link: '/',
    active: false
  },
  {
    name: 'Статьи',
    link: '/',
    active: false
  },
  {
    name: 'Контакты',
    link: '/',
    active: false
  },
]);

const getText = () => {
  const baskround = ref(`background-image: url('${mainImage}')`);
  if (route.fullPath === '/') {
    show.value = true;
    baskround.value = `background-image: url('${mainImage}')`
    return { title: headerDataText[0].title, text: headerDataText[0].text, baskround: baskround.value };
  }
  if (route.fullPath === '/fieldsheating') {
    show.value = true;
    baskround.value = `background-image: url('${mainImage2}')`
    return { title: headerDataText[1].title, text: headerDataText[1].text, baskround: baskround.value };
  }
  if (route.fullPath === '/designing') {
    show.value = true;
    baskround.value = `background-image: url('${mainImage3}')`
    return { title: headerDataText[2].title, text: headerDataText[2].text, baskround: baskround.value };
  }
  if (route.fullPath === '/pageproject') {
    show.value = false;
    baskround.value = `background-image: url('${mainImage4}')`
    return { title: '', text: '', baskround: baskround.value };
  }
};


</script>

<template>
  <ClientOnly>
    <header class="header" :class="{ 'header_heigth500': !show }" :style="getText().baskround">
      <div class="header__box">
        <NuxtLink to="/"><img class="header__logo" src="../assets/images/mainPage/ФЕСПО.png" alt="fespo_logo"
            @click="click" />
        </NuxtLink>
        <div class="header__box-menu">
          <header-item-menu :link="item.link" :name="item.name" :active="item.active" :key="index + count"
            v-for="item, index in menuItem" @click="click" />
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
