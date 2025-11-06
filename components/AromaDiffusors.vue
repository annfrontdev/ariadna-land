<script setup lang="ts">
import SectionTitle from '@/elements/SectionTitle.vue';

const photos = [
  {
    id: 1,
    img: 'content/diffusors-1.webp',
    alt: 'свеча 1',
  },
  {
    id: 2,
    img: 'content/diffusors-2.webp',
    alt: 'свеча 2',
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
              <br >
              Аромадиффузор стал неотъемлемой частью образа интерьера.
              <br >
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: $tablet) {
    h2 {
      margin-top: 0;
    }
  }
}
</style>
