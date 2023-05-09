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
  width: 100%;
  min-height: 100vh;
  color: $whitetext;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
