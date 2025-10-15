<script setup>
import MainTitle from "~/elements/MainTitle.vue";
</script>

<template>
  <div class="promo wrapper">
    <div class="promo__grid">
      <MainTitle class="promo__title">Ariadna premium</MainTitle>
      <img
        src="./content/promo-1.png"
        alt="промо свеча 1"
        class="promo__photo"
      />
      <img
        src="./content/promo-2.png"
        alt="промо свеча 2"
        class="promo__photo"
      />
      <NuxtLink to="/contacts" class="promo__button">
        <span>НАПИСАТЬ НАМ</span>
        <Icon name="my-icon:arrow" size="8" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.promo {
  display: flex;
  justify-content: center;
  margin: $vertical-margin 0;

  &__grid {
    display: grid;
    grid-template-columns: 395px 395px;
    grid-template-rows: max-content max-content max-content;
    column-gap: 30px;
  }

  &__button {
    border: 1px solid $text;
    padding: 13px 20px;
    color: inherit;
    text-decoration: none;
    font-size: 14px;
    width: fit-content;
    min-width: min-content;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    gap: 14px;
  }

  &__title {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  img {
    width: 100%;
  }

  &__photo:nth-of-type(1) {
    grid-column: 1/2;
    grid-row: 2/-1;
  }

  &__photo:nth-of-type(2) {
    grid-column: 2/3;
    grid-row: 1/3;
  }

  a {
    grid-column: 2/3;
    grid-row: 3/-1;
  }
}
</style>
