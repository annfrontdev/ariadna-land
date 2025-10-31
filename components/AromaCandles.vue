<script setup>
import SectionTitle from "~/elements/SectionTitle.vue";
import PhotosGrid from "./PhotosGrid.vue";
import CommonList from "~/elements/CommonList.vue";

const photos = [
  {
    id: 1,
    img: "content/candles-1.webp",
    alt: "аромасвеча 1",
  },
  {
    id: 2,
    img: "content/candles-2.webp",
    alt: "аромасвеча 2",
  },
  {
    id: 3,
    img: "content/candles-3.webp",
    alt: "аромасвеча 3",
  },
];

const formTypes = [
  { id: 1, text: "волны" },
  { id: 2, text: "карусель" },
  { id: 3, text: "мороженое" },
];
</script>

<template>
  <div id="candles" class="aroma-candles">
    <div class="wrapper">
      <SectionTitle>аромасвечи с медитацией</SectionTitle>
      <PhotosGrid :photos="photos" class="aroma-candles__grid">
        <p>
          Наше основное отличие от других - это бонус, который вы получаете с
          каждой свечой в гипсе - вшитая в нее медитация! Ассортимент
          аромасвечей в гипсовых подсвечниках образуется из трех основных форм:
        </p>

        <CommonList :list="formTypes" />

        <p>
          Цвета все максимально естественные: от молочного до графитового.
          Каждый подсвечник уникален, его цвет невозможно повторить.
        </p>

        <p>
          И, разумеется, аромат свечи. Их мы используем в соответствии с сезоном
          или поводом. У нас вы можете заказать аромасвечу с классическим
          ароматом (цитрусовые/еловые), так и с нетипичным (вишневый табак/
          грушевый глинвейн).
        </p>

        <p>
          Каким бы не был аромат, который вы выберете, он точно побудит гостей
          спросить, что за аромат вы используете!
        </p>
      </PhotosGrid>
    </div>
  </div>
</template>

<style lang="scss">
.aroma-candles {
  @include vertical-margin;
  // width: 100%;

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
