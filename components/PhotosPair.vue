<script setup lang="ts">
import type { Photo } from "@/types";

withDefaults(
  defineProps<{
    photos?: Photo[];
    hideEllipse?: boolean;
  }>(),
  {
    photos: () => [],
    hideEllipse: () => false
  }
);
</script>
<template>
  <div v-if="photos?.length" class="photos-pair">
    <div class="photos-pair__content">
      <div v-for="p in photos" :key="p.id" class="photos-pair__photo">
        <img :src="p.img" loading="lazy" :alt="p.alt">
      </div>
    </div>

    <img
      v-if="!hideEllipse"
      src="/ellipse.svg"
      class="photos-pair__ellipse"
      alt="эллипс">
  </div>
</template>

<style lang="scss">
.photos-pair {
  position: relative;

  &__photo {
    @include photo-bg;
    height: 100%;
    border-bottom-left-radius: $lg-radius;

    &:nth-child(2) {
      border-radius: 0;
      border-top-right-radius: $s-radius;
      height: 50%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: 371px 171px;
    column-gap: 4%;
    height: 466px;
    justify-content: center;
    z-index: 1;
  }

  &__ellipse {
    position: absolute;
    top: 55%;
    transform: translateY(-50%) rotate(-35deg);
    transform-origin: center;
    left: -15%;
    width: 135%;
    height: auto;
    z-index: -1;
  }

  @media (max-width: $mobile) {
    &__photo {
      border-bottom-left-radius: $s-radius;
      &:nth-child(2) {
        border-top-right-radius: $xs-radius;
      }
    }
    &__content {
      grid-template-columns: 171px 91px;
      height: 266px;
      gap: 8px;
    }
  }
}
</style>
