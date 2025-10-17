<script setup>
import SectionTitle from "~/elements/SectionTitle.vue";
import PhotosGrid from "./PhotosGrid.vue";
const photos = [
  {
    id: 1,
    img: "content/form-candles-1.png",
    alt: "формовая свеча 1",
  },
  {
    id: 2,
    img: "content/form-candles-2.png",
    alt: "формовая свеча 2",
  },
  {
    id: 3,
    img: "content/form-candles-3.png",
    alt: "формовая свеча 3",
  },
];
</script>

<template>
  <div id="form" class="form-candles wrapper">
    <div class="form-candles__content">
      <SectionTitle>формовые свечи</SectionTitle>

      <PhotosGrid :photos="photos">
        <p>
          Малыш Будда, Лотос и Столбик из пузырей - линейка формовых свечей.
        </p>
        <p>
          Они бывают ароматные и нейтральные - с запахом натурального соевого
          воска.
        </p>
        <p>
          Своей филигранностью они покоряют сердца и вдохновляют любоваться имиё
          и жалеть зажигать!
        </p>
      </PhotosGrid>
    </div>
  </div>
</template>

<style lang="scss">
.form-candles {
  &__content {
    margin: $vertical-margin 0;
  }
}
</style>
