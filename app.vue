<script setup lang="ts">

</script>

<template>
  <div class="page">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.page {
  background-color: $black;
  width: 100%;
  min-height: 100vh;
  color: $whitetext;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
