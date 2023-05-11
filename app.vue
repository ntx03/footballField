<script setup lang="ts">

</script>

<template>
  <div class="page">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Popup />
  </div>
</template>

<style scoped lang="scss">
.page {
  background-color: $backround;
  max-width: 100%;
  height: min-content;
  color: $whitetext;
  //margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
