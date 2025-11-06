<script setup lang="ts">
import SectionTitle from '@/elements/SectionTitle.vue';
import CommonList from '@/elements/CommonList.vue';

import regularPhotoAbout1 from '@/assets/photos/regular/about-1.webp';
import regularPhotoAbout2 from '@/assets/photos/regular/about-2.webp';
import retinaPhotoAbout1 from '@/assets/photos/retina/about-1.webp';
import retinaPhotoAbout2 from '@/assets/photos/retina/about-2.webp';

const photos = [
  {
    regular: regularPhotoAbout1,
    retina: retinaPhotoAbout1,
    alt: 'свеча 1',
    id: 0,
  },
  {
    regular: regularPhotoAbout2,
    retina: retinaPhotoAbout2,
    alt: 'свеча 2',
    id: 1,
  },
];

const benefits = [
  {
    id: 1,
    text: `Эстетика в каждой детали: наши интерьерные свечи и диффузоры – это
      стильные аксессуары, которые подчеркнут индивидуальность вашего дома.`,
  },
  {
    id: 2,
    text: `Стиль в каждом детали: наши интерьерные свечи и диффузоры – это
      стильные аксессуары, которые подчеркнут индивидуальность вашего дома.`,
  },
  {
    id: 3,
    text: `Помощь в релаксации: наши аромасвечи с медитацией созданы для того, чтобы
      помочь вам расслабиться, снять стресс и создать атмосферу умиротворения.`,
  },
  {
    id: 4,
    text: `Экологичность: мы заботимся о планете и предлагаем вам возможность
      переиспользовать наши продукты, чтобы сократить количество отходов.`,
  },
  {
    id: 5,
    text: `Идеальный подарок: аромасвечи и аромадиффузоры Ariadna – это
      прекрасный способ выразить свою заботу и любовь близким.`,
  },
];
</script>

<template>
  <div id="about" class="about-us">
    <div class="about-us__content wrapper">
      <div>
        <SectionTitle>О нас</SectionTitle>
        <div class="about-us__text">
          <p>
            Мы верим, что детали создают атмосферу, поэтому каждая наше изделие – это уникальное
            произведение искусства,
            <br />
            способное преобразить любой интерьер. Ariadna premium – это:
          </p>

          <CommonList :list="benefits" />
        </div>
      </div>
      <PhotosPair :photos="photos" :hide-ellipse="true" />
    </div>
  </div>
</template>

<style lang="scss">
.about-us {
  @include vertical-margin;
  display: flex;
  justify-content: center;

  h2 {
    margin-top: 36px;
  }

  p {
    margin-bottom: 25px;
    line-height: 24px;
  }

  &__text {
    padding-bottom: 20px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: $tablet) {
    h2 {
      margin-top: 0;
    }
  }
}
</style>
