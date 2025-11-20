<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
import PhotosGrid from '@/components/PhotosGrid.vue';

import regularPhotoForm1 from '@/assets/photos/regular/form-candles-1.webp';
import retinaPhotoForm1 from '@/assets/photos/retina/form-candles-1.webp';

import regularPhotoForm2 from '@/assets/photos/regular/form-candles-2.webp';
import retinaPhotoForm2 from '@/assets/photos/retina/form-candles-2.webp';

import regularPhotoForm3 from '@/assets/photos/regular/form-candles-3.webp';
import retinaPhotoForm3 from '@/assets/photos/retina/form-candles-3.webp';

const photos = [
  {
    regular: regularPhotoForm1,
    retina: retinaPhotoForm1,
    alt: 'формовая свеча 1',
    id: 0,
  },
  {
    regular: regularPhotoForm2,
    retina: retinaPhotoForm2,
    alt: 'формовая свеча 2',
    id: 1,
  },
  {
    regular: regularPhotoForm3,
    retina: retinaPhotoForm3,
    alt: 'формовая свеча 3',
    id: 2,
  },
];
</script>

<template>
  <div id="form" class="form-candles">
    <div class="wrapper">
      <SectionTitle>Формовые свечи</SectionTitle>
      <PhotosGrid :photos="photos">
        <p><strong>Малыш Будда, Лотос и Столбик из пузырей - линейка формовых свечей.</strong></p>
        <p>Они бывают ароматные и нейтральные - с запахом натурального соевого воска.</p>
        <p>
          Своей филигранностью они покоряют сердца и вдохновляют любоваться ими и жалеть зажигать!
        </p>
      </PhotosGrid>
    </div>
  </div>
</template>

<style lang="scss">
.form-candles {
  @include vertical-margin;

  .photos-grid__photos {
    grid-template-columns: 444px 332px 332px;
  }
  .photos-grid__photo {
    max-height: 399px;
  }
  .photos-grid__photo:first-child {
    max-height: 663px;
  }
  @media (max-width: $tablet) {
    .photos-grid__photos {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
