<script setup>
definePageMeta({
    layout: 'header',
})
</script>

<template>
    <div class="page" id="pageprogect">
        <div class="container">
            <MenuUnderHeader />
            <ProjectPageProgect />
        </div>
    </div>
    <YourQuestion />
    <Awards />
</template>
    

<style scoped lang="scss">
.page {
    background-image: url(../assets/images/desighingPage/Group_8.png);
    width: 1600px;
    margin: 0 auto 0 auto;
    background-repeat: no-repeat;
    background-position: top right;
}

.container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}
</style>