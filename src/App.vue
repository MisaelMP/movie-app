<template>
  <Banner />
  <div class="u-wrapper">
    <Home />
  </div>
</template>

<script setup>
import Banner from './components/pureComponents/Banner.vue';
import Home from './components/Home.vue';
</script>

<style scoped lang="postcss">
.u-wrapper {
   @apply flex m-10;
}
</style>
