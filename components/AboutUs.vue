<script setup>
import SectionTitle from "~/elements/SectionTitle.vue";
import PhotosPair from "./PhotosPair.vue";
import CommonList from "~/elements/CommonList.vue";

const benefits = [
  {
    id: 1,
    text: `Эстетика в каждой детали: наши интерьерные свечи и диффузоры – это
      стильные аксессуары, которые подчеркнут индивидуальность вашего дома.`,
  },
  {
    id: 2,
    text: `Стиль в каждом детале: наши интерьерные свечи и диффузоры – это
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
      реюзить наши продукты, чтобы сократить количество отходов.`,
  },
  {
    id: 5,
    text: `Идеальный подарок: аромасвечи и аромадиффузоры Ariadna – это
      прекрасный способ выразить свою заботу и любовь близким.`,
  },
];

const photos = [
  {
    id: 1,
    img: "./content/about-1.png",
    alt: "свеча 1",
  },
  {
    id: 2,
    img: "./content/about-2.png",
    alt: "свеча 2",
  },
];
</script>

<template>
  <div id="about" class="about-us">
    <div class="about-us__content wrapper">
      <div>
        <SectionTitle>о нас</SectionTitle>
        <div>
          <p>
            Мы верим, что детали создают атмосферу, поэтому каждая наше изеделие
            – это уникальное произведение искусства, способное преобразить любой
            интерьер. Ariadna premium – это:
          </p>

          <CommonList :list="benefits" />
        </div>
      </div>
      <PhotosPair :photos="photos" :hideEllipse="true"/>
    </div>
  </div>
</template>

<style lang="scss">
.about-us {
  display: flex;
  justify-content: center;
  margin: 157px 0;

  h2 {
    margin-top: 36px;
  }

  p {
    margin-bottom: 25px;
    line-height: 24px;
  }

  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 73px;
  }
}
</style>
