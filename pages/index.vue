<script setup>

definePageMeta({
    layout: "header",
});
</script>

<template>
    <ClientOnly>
        <div class="page">
            <MainPageFieldHeating />
            <!-- </div> -->
            <MainPageDesigning />
            <!-- <div class="page"> -->
            <MainPageAbout />
            <!-- </div> -->
            <MainPageNews />
        </div>
    </ClientOnly>
</template>

<style scoped lang="scss">
.page {
    width: 1600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
    background-image: url(../assets/images/desighingPage/Group_8.png);
    background-repeat: no-repeat;
    background-position: right top;
    //position: relative;
}
</style>
