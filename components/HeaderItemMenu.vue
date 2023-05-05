<template>
    <NuxtLink :to="link" class="header__menu-item">
        <p class="text" :class="{ 'text_active': active }">{{ name }}</p>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
    }
})

</script>
<style scoped lang="scss">
.header__menu-item {
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
}

.text {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: $whitetext;
    margin: 0;
    padding: 0;
    transition: 0.3s;

    &_active {
        color: $yellow;
    }

    &:hover {
        color: $yellow;
    }
}
</style>