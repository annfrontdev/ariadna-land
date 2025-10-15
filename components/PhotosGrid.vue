<script setup>
defineProps({
  photos: Array,
});
</script>

<template>
  <div class="photos-grid">
    <div v-for="photo in photos" :key="photo.id" class="photos-grid__photo">
      <img :src="photo.img" :alt="photo.alt" />
    </div>

    <div class="photos-grid__description">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.photos-grid {
  display: grid;
  grid-template-columns: 38% 28% 28%;
  grid-template-rows: 395px 1fr;
  column-gap: 40px;
  row-gap: 36px;

  p {
    margin: 0;
    font-size: 18px;
    margin-bottom: 40px;
  }

  &__photo {
    overflow: hidden;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__photo:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    border-top-left-radius: 140px;
  }

  &__photo:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &__photo:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    border-top-right-radius: 140px;
  }

  &__description {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
  }
}
</style>
