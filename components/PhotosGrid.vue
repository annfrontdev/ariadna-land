<script lang="ts" setup>
import type { Photo } from "@/types";

withDefaults(
  defineProps<{
    photos?: Photo[];
  }>(),
  {
    photos: () => [],
  }
);
</script>

<template>
  <div class="photos-grid">
    <div class="photos-grid__photos">
      <div v-for="p in photos" :key="p.id" class="photos-grid__photo">
        <img :src="p.img" loading="lazy" :alt="p.alt" >
      </div>

      <div class="photos-grid__description">
        <slot />
      </div>
    </div>

    <div class="photos-grid__description photos-grid__description--mobile">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.photos-grid {
  &__description {
    p {
      margin: 0;
      font-size: 18px;
      margin-bottom: 1rem;
    }

    &--mobile {
      display: none;
    }
  }

  &__photos {
    display: grid;
    grid-template-columns: 38% 28% 28%;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    column-gap: 2%;
    row-gap: 2%;
  }

  &__photo {
    @include photo-bg;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    &:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / -1;
      border-top-left-radius: 160px;
    }

    &:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    &:nth-child(3) {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      border-top-right-radius: 120px;
    }
  }

  &__description {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
  }

  @media (max-width: $tablet) {
    &__photos {
      width: 100%;
      aspect-ratio: 1 / 1;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    &__photo {
      &:first-child {
        grid-row: 1 / 3;
        border-top-left-radius: 80px;
      }

      &:nth-child(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        border-radius: 0;
        border-bottom-right-radius: 60px;
      }
    }

    &__description {
      display: none;

      &--mobile {
        display: block;
        margin-top: 40px;
      }
    }
  }
}
</style>
