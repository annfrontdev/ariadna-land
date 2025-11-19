<script setup lang="ts">
import SectionTitle from '@/elements/SectionTitle.vue';
import CommonList from '@/elements/CommonList.vue';

import regularPhotoCandles1 from '@/assets/photos/regular/candles-1.webp';
import retinaPhotoCandles1 from '@/assets/photos/retina/candles-1.webp';

import regularPhotoCandles2 from '@/assets/photos/regular/candles-2.webp';
import retinaPhotoCandles2 from '@/assets/photos/retina/candles-2.webp';

import regularPhotoCandles3 from '@/assets/photos/regular/candles-3.webp';
import retinaPhotoCandles3 from '@/assets/photos/retina/candles-3.webp';

const photos = [
  {
    regular: regularPhotoCandles1,
    retina: retinaPhotoCandles1,
    alt: 'аромасвеча 1',
    id: 0,
  },
  {
    regular: regularPhotoCandles2,
    retina: retinaPhotoCandles2,
    alt: 'аромасвеча 2',
    id: 1,
  },
  {
    regular: regularPhotoCandles3,
    retina: retinaPhotoCandles3,
    alt: 'аромасвеча 3',
    id: 2,
  },
];

const formTypes = [
  { id: 1, text: 'волны' },
  { id: 2, text: 'карусель' },
  { id: 3, text: 'мороженое' },
];
</script>

<template>
  <div id="candles" class="aroma-candles">
    <div class="wrapper">
      <SectionTitle>Аромасвечи с медитацией</SectionTitle>
      <PhotosGrid :photos="photos" class="aroma-candles__grid">
        <p>
          Наше основное отличие от других - это бонус, который вы получаете с каждой свечой в гипсе
          - вшитая в нее медитация! Ассортимент аромасвечей в гипсовых подсвечниках образуется из
          трех основных форм:
        </p>

        <CommonList :list="formTypes" />

        <p>
          Цвета все максимально естественные: от молочного до графитового. Каждый подсвечник
          уникален, его цвет невозможно повторить.
        </p>

        <p>
          И, разумеется, аромат свечи. Их мы используем в соответствии с сезоном или поводом. <strong>
            У нас
            вы можете заказать аромасвечу с классическим ароматом (цитрусовые/еловые), так и с
            нетипичным (вишневый табак/ грушевый глинтвейн).
          </strong>
        </p>

        <p>
          Каким бы не был аромат, который вы выберете, он точно побудит гостей спросить, что за
          аромат вы используете!
        </p>
      </PhotosGrid>
    </div>
  </div>
</template>

<style lang="scss">
.aroma-candles {
  @include vertical-margin;

  &__grid {
    p {
      margin-bottom: 4px;
    }
    ul {
      margin-left: 10px;
      margin-bottom: 4px;
    }
    li:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
