<template>
    <section class="contacts">
        <div class="wrapper">
            <MenuUnderHeader />
            <ContactsComponent />
        </div>
    </section>
</template>
    
<script setup lang='ts'>
definePageMeta({
    layout: 'header'
})
</script>
    
<style lang="scss" scoped>
.contacts {
    width: 1600px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    background-image: url(../assets/images/contactsPage/Group_8.png);
    background-position: top right;
    background-repeat: no-repeat;
}

.wrapper {
    width: 1200px;
    margin: 0px auto 0 auto;
    display: flex;
    flex-direction: column;

}
</style>