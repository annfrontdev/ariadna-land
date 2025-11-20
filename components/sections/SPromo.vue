<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import NavigationButton from '@/components/NavigationButton.vue';

import regularPhotoPromo1 from '@/assets/photos/regular/promo-1.webp';
import retinaPhotoPromo1 from '@/assets/photos/retina/promo-1.webp';
import regularPhotoPromo2 from '@/assets/photos/regular/promo-2.webp';
import retinaPhotoPromo2 from '@/assets/photos/retina/promo-2.webp';

import ellipseIcon from '/ellipse.svg';

const promo_images = [
  {
    regular: regularPhotoPromo1,
    retina: retinaPhotoPromo1,
    alt: 'промо свеча 1',
    id: 0,
  },
  {
    regular: regularPhotoPromo2,
    retina: retinaPhotoPromo2,
    alt: 'промо свеча 2',
    id: 1,
  },
];

const titleRef = ref();
const titleWrapperRef = ref();
const stretchFactor = ref(1);

function updateStretch() {
  const containerWidth = titleWrapperRef.value.offsetWidth;
  const textWidth = titleRef.value.offsetWidth;
  stretchFactor.value = containerWidth / textWidth - 0.2;
}

onMounted(() => {
  updateStretch();
  window.addEventListener('resize', updateStretch);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateStretch);
});
</script>

<template>
  <div class="promo">
    <div class="wrapper">
      <div class="promo__grid">
        <img :src="ellipseIcon" class="promo__ellipse" alt="эллипс" />

        <div ref="titleWrapperRef" class="promo__title">
          <span ref="titleRef" :style="{ transform: `scale(${stretchFactor})` }">
            Ariadna premium
          </span>
        </div>

        <div v-for="(im, id) in promo_images" :key="id" class="promo__photo">
          <img :src="im.regular" :alt="im.alt" :srcset="`${im.retina} 2x`" />
        </div>

        <NavigationButton link="contacts" class="promo__button">
          <span>НАПИСАТЬ НАМ</span>
          <Icon name="my-icon:arrow" />
        </NavigationButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.promo {
  @include vertical-margin;
  display: flex;
  justify-content: center;

  &__grid {
    display: grid;
    grid-template-columns: 395px 395px;
    grid-template-rows: max-content max-content max-content;
    gap: 2%;
    justify-content: center;
    position: relative;
  }

  &__ellipse {
    position: absolute;
    transform: translate(-50%, -50%) rotate(-45deg);
    transform-origin: center;
    z-index: -1;
    top: 50%;
    left: 50%;
    width: 90%;
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
    background-color: transparent;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba($text, 0.1);
    }

    &:active {
      background-color: rgba($text, 0.2);
    }
  }

  &__title {
    grid-column: 1/2;
    grid-row: 1/2;
    width: 100%;
    padding: 10px 10px 14px 10px;
    box-sizing: border-box;

    span {
      @include font-fourth;
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      white-space: nowrap;
      margin: 0;
      display: inline-block;
      transform-origin: left;
    }
  }

  &__photo {
    @include photo-bg;
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    border-bottom-left-radius: $lg-radius;
    min-height: 150px;

    &:nth-of-type(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      border-radius: 0;
      border-top-right-radius: $lg-radius;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  a {
    grid-column: 2 / 3;
    grid-row: 3 / -1;
  }

  &__button {
    span:last-child {
      width: 2rem;
    }
  }

  @media (max-width: $tablet) {
    &__grid {
      gap: 8px;
    }

    &__button {
      font-size: 12px;
      span:last-child {
        display: none;
      }
    }
  }

  @media (max-width: $mobile-tablet) {
    &__grid {
      grid-template-columns: 50% 50%;
    }

    &__photo {
      border-bottom-left-radius: $s-radius;

      &:nth-of-type(2) {
        border-top-right-radius: $s-radius;
      }
    }
  }

  @media (max-width: $mobile) {
    &__title {
      padding: 2px;
      padding-left: 2px;
    }
    &__button {
      padding: 4px 8px;
      font-size: 10px;

      span:last-child {
        display: none;
      }
    }
  }
}
</style>
