<script setup>
import SectionTitle from "~/elements/SectionTitle.vue";
import PhotosPair from "./PhotosPair.vue";

const photos = [
  {
    id: 1,
    img: "content/diffusors-1.png",
    alt: "свеча 1",
  },
  {
    id: 2,
    img: "content/diffusors-2.png",
    alt: "свеча 2",
  },
];
</script>

<template>
  <div id="diffusers" class="diffusors">
    <div class="wrapper">
      <div class="diffusors__content">
        <div>
          <SectionTitle>аромадиффузоры</SectionTitle>
          <div>
            <p>
              Аромат - невидимый образ, который создается в каждом помещении.
              Диффузор - это один из способов его спроектировать.
            </p>
            <p>
              Вдохните свежести в рабочее пространство или умиротворения
              в&nbsp;спальню.
              <br />
              Аромадиффузор стал неотъемлемой частью образа интерьера.
              <br />
              Не отказывайте себе в удовольствии наслаждаться любимыми ароматами
              не только через духи.
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

  &__content {
    @include grid-content;
    justify-content: center;
  }

  @media (max-width: $tablet) {
    h2 {
      margin-top: 0;
    }
  }
}
</style>
