<script setup>
import LinksList from "~/elements/LinksList.vue";
import SectionTitle from "~/elements/SectionTitle.vue";
const contacts = [
  { id: 1, path: "", img: "content/telegram.png" },
  { id: 2, path: "", img: "content/whatsapp.png" },
  { id: 3, path: "", img: "content/vk.png" },
];
</script>

<template>
  <div id="contacts" class="contacts wrapper">
    <div class="contacts__content">
      <SectionTitle>написать нам</SectionTitle>
      <p>задать вопрос или забрать бесплатный чек-лист в соц.сетях</p>

      <LinksList :list="contacts" class="contacts__list"></LinksList>
    </div>
  </div>
</template>

<style lang="scss">
.contacts {
  @include horizontal-padding;
  display: grid;
  text-align: center;

  p {
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    margin: 0;
    margin-bottom: 28px;
  }

  &__list {
    display: flex;
    gap: 70px;
    justify-content: center;

    img {
      width: 120px;
      height: 120px;
    }
  }

  &__content {
    @include vertical-margin;
  }

  @media (max-width: $tablet) {
    p {
      font-size: 22px;
      line-height: 30px;
    }

    &__list {
      gap: 16px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
