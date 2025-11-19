<script setup lang="ts">
import SectionTitle from '@/elements/SectionTitle.vue';

import regularPhotoBrand1 from '@/assets/photos/regular/brand-1.webp';
import retinaPhotoBrand1 from '@/assets/photos/retina/brand-1.webp';

import regularPhotoBrand2 from '@/assets/photos/regular/brand-2.webp';
import retinaPhotoBrand2 from '@/assets/photos/retina/brand-2.webp';

import regularPhotoBrand3 from '@/assets/photos/regular/brand-3.webp';
import retinaPhotoBrand3 from '@/assets/photos/retina/brand-3.webp';

const photos = [
  {
    regular: regularPhotoBrand1,
    retina: retinaPhotoBrand1,
    alt: 'брендированная свеча 1',
    id: 0,
  },
  {
    regular: regularPhotoBrand2,
    retina: retinaPhotoBrand2,
    alt: 'брендированная свеча 2',
    id: 1,
  },
  {
    regular: regularPhotoBrand3,
    retina: retinaPhotoBrand3,
    alt: 'брендированная свеча 3',
    id: 2,
  },
];
</script>

<template>
  <div id="brand" class="brand-candles">
    <div class="wrapper">
      <SectionTitle>Брендированные свечи</SectionTitle>
      <p>Мерч, которого точно нет у ваших конкурентов</p>

      <div class="brand-candles__photos">
        <div v-for="p in photos" :key="p.id" class="brand-candles__photo">
          <img :src="p.regular" :alt="p.alt" :srcset="`${p.retina} 2x`" loading="lazy" >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.brand-candles {
  @include vertical-margin;
  display: flex;
  justify-content: center;

  p {
    margin-bottom: 40px;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
  }

  &__photos {
    height: 428px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: clamp(8px, 2vw, 47px);
  }

  &__photo {
    @include photo-bg;
    aspect-ratio: 1/1.5;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:first-child {
      border-top-left-radius: 80px;
    }

    &:last-child {
      border-bottom-right-radius: 80px;
    }
  }

  @media (max-width: $tablet) {
    p {
      font-size: 22px;
      line-height: 30px;
    }

    &__photos {
      height: auto;
      width: 100%;
    }
  }

  @media (max-width: $mobile) {
    &__photo {
      &:first-child {
        border-top-left-radius: 60px;
      }

      &:last-child {
        border-bottom-right-radius: 60px;
      }
    }
  }
}
</style>
