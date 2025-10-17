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
  <div id="contacts" class="contacts">
    <SectionTitle>написать нам</SectionTitle>
    <p>задать вопрос или забрать бесплатный чек-лист в соц.сетях</p>

    <LinksList :list="contacts" class="contacts__list"></LinksList>
  </div>
</template>

<style lang="scss">
.contacts {
  margin: $vertical-margin 0;
  padding: 0 $horizontal-padding;
  display: grid;
  text-align: center;

  p {
    font-weight: 300;
    font-size: 32px;
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
}
</style>
