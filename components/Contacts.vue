<script setup>
import LinksList from "~/elements/LinksList.vue";
import SectionTitle from "~/elements/SectionTitle.vue";
const contacts = [
  { id: 1, path: "https://t.me/ZaryaVechernyaya", alt:'telegram логотип',  img: "content/telegram.webp" },
  { id: 2, path: "https://wa.me/79108544377", alt:'whatsapp логотип',  img: "content/whatsapp.webp" },
  { id: 3, path: "https://vk.com/ldrswg", alt:'vk логотип',  img: "content/vk.webp" },
];
</script>

<template>
  <div id="contacts" class="contacts">
    <div class="wrapper">
      <div class="contacts__content">
        <SectionTitle>написать нам</SectionTitle>
        <p>задать вопрос или запросить прайс</p>

        <LinksList :list="contacts" class="contacts__list"></LinksList>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contacts {
  @include vertical-margin;
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

  @media (max-width: $tablet) {
    margin-top: 20px;
    margin-bottom: 20px;

    p {
      font-size: 22px;
      line-height: 30px;
    }

    h2 {
      margin-bottom: 0;
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
