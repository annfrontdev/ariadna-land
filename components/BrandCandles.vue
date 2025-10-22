<script setup>
import SectionTitle from "~/elements/SectionTitle.vue";
const photos = [
  {
    id: 1,
    img: "content/brand-candles-1.png",
    alt: "брендированная свеча 1",
  },
  {
    id: 2,
    img: "content/brand-candles-2.png",
    alt: "брендированная свеча 2",
  },
  {
    id: 3,
    img: "content/brand-candles-3.png",
    alt: "брендированная свеча 3",
  },
];
</script>

<template>
  <div id="brand" class="brand-candles">
    <div class="wrapper">
      <SectionTitle>брендированные свечи</SectionTitle>
      <p>мерч, которого точно нет у ваших конкурентов</p>

      <div class="brand-candles__photos">
        <div v-for="p in photos" :key="p.id" class="brand-candles__photo">
          <img :src="p.img" :alt="p.alt" />
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
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:first-child {
      border-top-left-radius: 70px;
    }

    &:last-child {
      border-bottom-right-radius: 70px;
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
      aspect-ratio: 1 / 1;
    }
  }
}
</style>
