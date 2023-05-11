<script setup>
const route = useRoute();
const show = ref(false);
const regex = /fieldsheating/;
const regexProgect = /pageproject/;
const regexDesigning = /designing/;
const regexArticles = /articles/;

const getNamePage = () => {
    const fieldsheatingMatch = regex.test(route.fullPath);
    const pageProgectMatch = regexProgect.test(route.fullPath);
    const designingMatch = regexDesigning.test(route.fullPath);
    const articlesMatch = regexArticles.test(route.fullPath);
    if (fieldsheatingMatch) {
        show.value = false;
        return 'Подогрев полей'
    }
    if (designingMatch) {
        show.value = false;
        return 'Проектирование'
    }
    if (pageProgectMatch) {
        show.value = true;
        return ` Стадион «Торпедо»`;
    }
    if (route.fullPath === '/about') {
        show.value = false;
        return `О компании`;
    }
    if (articlesMatch) {
        show.value = false;
        return `Статьи`;
    }
    if (route.fullPath === '/contacts') {
        show.value = false;
        return `Контакты`;
    }
}
</script>

<template>
    <div class="menu">
        <div class="menu__container">
            <NuxtLink to="/" class="menu__main-text">Главная</NuxtLink>
            <p to="/" class="menu__main-text">/</p>
            <NuxtLink to="/designing" class="menu__main-text" v-show="show">Проектирование</NuxtLink>
            <p to="/" class="menu__main-text" v-show="show">/</p>
            <p class="menu__page-text">{{ getNamePage() }}</p>
        </div>
    </div>
</template>
    
<style scoped lang="scss">
.menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 40px auto 0 auto;

}

.menu__container {
    display: flex;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 300;
    text-decoration: none;
    margin: 0 auto 0 0;

}

.menu__main-text {
    text-decoration: none;
    color: $whitetext;
    padding: 0;
    margin: 0;
    opacity: 0.5;
}

.menu__page-text {
    padding: 0;
    margin: 0;
    color: $yellow;

}
</style>