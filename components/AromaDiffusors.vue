<script setup lang="ts">
import SectionTitle from '@/elements/SectionTitle.vue';
import PhotosPair from '@/components/PhotosPair.vue';

import regularPhotoDiffusors1 from '@/assets/photos/regular/diffusors-1.webp';
import retinaPhotoDiffusors1 from '@/assets/photos/retina/diffusors-1.webp';

import regularPhotoDiffusors2 from '@/assets/photos/regular/diffusors-2.webp';
import retinaPhotoDiffusors2 from '@/assets/photos/retina/diffusors-2.webp';

const photos = [
  {
    regular: regularPhotoDiffusors1,
    retina: retinaPhotoDiffusors1,
    alt: 'диффузор 1',
    id: 0,
  },
  {
    regular: regularPhotoDiffusors2,
    retina: retinaPhotoDiffusors2,
    alt: 'диффузор 2',
    id: 1,
  },
];
</script>

<template>
  <div id="diffusers" class="diffusors">
    <div class="wrapper">
      <div class="diffusors__content">
        <div>
          <SectionTitle>Аромадиффузоры</SectionTitle>
          <div>
            <p>
              Аромат - невидимый образ, который создается в каждом помещении. Диффузор - это один из
              способов его спроектировать.
            </p>
            <p>
              Вдохните свежести в рабочее пространство или умиротворения в&nbsp;спальню.
              <br>
              Аромадиффузор стал неотъемлемой частью образа интерьера.
              <br>
              Не отказывайте себе в удовольствии наслаждаться любимыми ароматами не только через
              духи.
            </p>
            <p>Сделайте дом или рабочее место аромакайфовым!</p>
          </div>
        </div>

        <div class="diffusors__photos">
          <PhotosPair :photos="photos" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.diffusors {
  @include vertical-margin;

  .wrapper {
    display: flex;
    justify-content: center;
  }

  h2 {
    margin-top: 35px;
  }

  p {
    line-height: 22px;
    margin: 27px 0;
  }

  &__photos {
    display: flex;
    justify-content: center;
  }

  &__content {
    @include grid-content;
  }

  @media (max-width: $tablet) {
    h2 {
      margin-top: 0;
    }
  }
}
</style>
