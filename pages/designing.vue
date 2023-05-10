<script setup>
definePageMeta({
    layout: "header",
});

</script>

<template>
    <ClientOnly>
        <div class="backround" id="designing">
            <div class="container">
                <MenuUnderHeader />
                <DesigningPageTitleDesigning />
                <PaginationComponent />
            </div>
        </div>
        <YourQuestion />
        <Awards />
        <MainPageNews />

    </ClientOnly>
</template>
 
<style scoped lang="scss">
.backround {
    width: 1600px;
    margin: 0 auto 0 auto;
    background-image: url(../assets/images/desighingPage/Group_8.png);
    background-position: top right;
    background-repeat: no-repeat;
    background-size: auto;
    padding: 0;
    min-height: 1000px;
    background-color: $backround;
}

.container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;

}
</style>