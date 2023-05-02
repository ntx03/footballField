<template>
    <div class="menu">
        <div class="menu__container">
            <NuxtLink to="/" class="menu__main-text">Главная</NuxtLink>
            <p to="/" class="menu__main-text">/</p>
            <p class="menu__page-text">{{ getNamePage() }}</p>
        </div>
    </div>
</template>
    
<script setup>
const route = useRoute();
const getNamePage = () => {
    if (route.fullPath === '/fieldsheating') {
        return 'Подогрев полей'
    }
}
</script>
    
<style scoped lang="scss">
.menu {
    width: 1600px;
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