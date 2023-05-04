<template>
    <section class="section">
        <div class="container">
            <h2 class="title">благодарственные письма</h2>
            <div class="image__container image__container_margin60">
                <img class="image" src="../assets/images/desighingPage/Rectangle_76.png" alt="благодарственное письмо">
                <img class="image" src="../assets/images/desighingPage/Rectangle_83.png" alt="благодарственное письмо">

                <img class="image" src="../assets/images/desighingPage/Rectangle_81.png" alt="благодарственное письмо">
                <img class="image" src="../assets/images/desighingPage/Rectangle_75.png" alt="благодарственное письмо">
            </div>
            <div class="image__container">

                <img class="image" src="../assets/images/desighingPage/Rectangle_82.png" alt="благодарственное письмо">
                <img class="image" src="../assets/images/desighingPage/Rectangle_80.png" alt="благодарственное письмо">
                <img class="image" src="../assets/images/desighingPage/Rectangle_79.png" alt="благодарственное письмо">
                <img class="image" src="../assets/images/desighingPage/Rectangle_77.png" alt="благодарственное письмо">


            </div>
        </div>
    </section>
</template>
    
<script setup>

</script>
    
<style scoped lang="scss">
.section {
    display: flex;
    flex-direction: column;
    width: 1600px;
    background-image: url(../assets/images/desighingPage/backround.png);
    background-repeat: no-repeat;
    background-position: left top;
    margin: 0 auto 0 auto;
}


.container {
    width: $mainwidth;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
}

.title {
    margin: 120px auto 0 0;
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;
}

.image__container {
    display: grid;
    grid-template-columns: repeat(4, min-content);
    gap: 30px;
    width: 100%;
    margin: 30px auto 0 auto;

    &_margin60 {
        margin: 60px auto 0 auto;
    }
}

.image {
    height: 310px;
    object-fit: contain;
    min-width: 240px;
}
</style>