<script setup>
definePageMeta({
    layout: 'header'
})
</script>

<template>
    <section class="articles">
        <div class="articles__container">
            <MenuUnderHeader />
            <ArticlesComponent />
        </div>
        <YourQuestion />
        <MainPageNews />
    </section>
</template>
    
<style lang="scss" scoped>
.articles {
    width: 1600px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    background-image: url(../assets/images/articlesPage/articles_backround.png);
    background-position: top right;
    background-repeat: no-repeat;

    &__container {
        width: 1200px;
        margin: 0 auto 0 auto;
        display: flex;
        flex-direction: column;
    }
}
</style>