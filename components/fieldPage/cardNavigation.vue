<script setup lang='ts'>
import { dataCardNavigation } from '~/utils/fieldPageData';

const nav = (hash: string) => {
    navigateTo({ path: '/fieldsheating', hash: `#${hash}` })
}
</script>

<template>
    <div class="card__container" id="heathFieldSystem">
        <div class="card__box" :style="`background-image: url(${item.image})`" v-for="item in dataCardNavigation"
            @click="nav(item.hash)">
            <div class="overlay"></div>
            <p class="card__text">{{ item.text }}</p>
        </div>
    </div>
    <!-- <div id="heathFieldSystem"></div> -->
</template>
    
<style  scoped lang="scss">
.card {
    display: flex;
    width: 1600px;
    margin: 120px auto 0px auto;
}

.card__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    margin: 120px auto 0 auto;
    gap: 30px;
}

.card__box {
    width: 100%;
    padding-top: 50%;
    display: flex;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 12px;

    &:hover .overlay {
        cursor: pointer;
        background-color: $yellow;
    }

    &:hover .card__text {
        cursor: pointer;
        color: $blacktext;
    }
}

.card__text {
    position: absolute;
    top: 42%;
    left: 0px;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-align: center;
    transition: 0.4s;
}

.overlay {
    background-color: $blacktext;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.8;
    border-radius: 12px;
    transition: 0.4s;

}

// .card__image {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 12px;

// }
</style>