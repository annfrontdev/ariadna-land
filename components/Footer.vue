<script setup>
import LinksList from "~/elements/LinksList.vue";

const list = [
  { id: 1, title: "Аромасвечи с медитацией", path: "#candles" },
  { id: 2, title: "Диффузоры", path: "#diffusers" },
  { id: 4, title: "Формовые свечи", path: "#form" },
  { id: 3, title: "Брендирование свечей", path: "#brand" },
];
</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__lists">
        <a href="#about">О нас</a>
        <LinksList :list="list"></LinksList>
        <a href="#about">Бесплатный чек-лист</a>
      </div>
      <p class="copyright">Ariadna premium 2025</p>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: $primary;
  padding: 60px 0;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
  }

  ul {
    display: grid;
    gap: 16px;
  }

  .copyright {
    font-weight: 300;
    font-size: 12px;
  }

  &__lists {
    display: flex;
    justify-content: space-between;
    margin-bottom: 75px;
  }

  @media (max-width: $tablet) {
    &__lists {
      flex-direction: column;
      align-content: space-between;
      gap: 40px;
    }
  }
}
</style>
