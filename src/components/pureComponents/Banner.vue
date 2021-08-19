<template>
  <div class="c-banner">
    <h1 class="c-banner__title">Movie night</h1>
  </div>
</template>

<style lang="postcss">
.c-banner {
  @apply bg-gray-200 flex items-center justify-center mb-20;
  height: clamp(10rem, 16vh, 10rem);

  &__title {
    @apply text-red-600;
    font-size: clamp(4rem, 4.8vw, 6rem);
    font-family: "Monoton", cursive;
  }
}
</style>