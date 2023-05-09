<script setup>
const arrPagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
</script>

<template>
    <div class="pagination">
        <div class="pagination__container">
            <button class="pagination__button"><img class="button__icon_back"
                    src="../assets/images/desighingPage/Arrow_forward.svg" alt="стрелка назад"></button>
            <div class="number__container">
                <p class="number" v-for="item in arrPagination">{{ item }}</p>
                <p class="number">... 11</p>
            </div>
            <button class="pagination__button"><img class="button__icon"
                    src="../assets/images/desighingPage/Arrow_forward.svg" alt="стрелка вперед"></button>
        </div>
    </div>
</template>
    
<style scoped lang="scss">
.pagination {
    display: flex;
    gap: 30px;
    margin: 60px auto 0 auto;
    width: 100%;
}

.pagination__container {
    display: flex;
    gap: 30px;
    margin: 0 auto 0 auto;
}

.pagination__button {
    border: none;
    background-color: inherit;

    :hover {
        cursor: pointer;
    }
}

.button__icon {
    width: 40px;

    &_back {
        width: 40px;
        transform: rotate(180deg);
    }
}

.number__container {
    display: flex;
    gap: 15px;
    //border: 1px red solid;
}

.number {
    color: $yellow;
    height: 21px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;

}
</style>