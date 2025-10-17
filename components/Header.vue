<script setup>
import LinksList from "~/elements/LinksList.vue";

const products = [
  { id: 1, title: "Аромасвечи", path: "#candles" },
  { id: 2, title: "Диффузоры", path: "#diffusers" },
  { id: 3, title: "Мерч", path: "#brand" },
  { id: 4, title: "Контакты", path: "#contacts" },
];

const headerLinks = {
  left: [...products.slice(0, products.length / 2)],
  right: [...products.slice(products.length / 2)],
};
</script>

<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <nav>
        <LinksList :list="headerLinks.left"></LinksList>

        <img
          src="/logo.svg"
          alt="Ariadna Premium - логотип"
          class="logo"
          width="110"
        />

        <LinksList :list="headerLinks.right"></LinksList>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: $primary;

  nav {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  svg {
    flex-shrink: 0;
  }

  ul {
    display: flex;
    gap: 50px;
    padding: 50px 0 40px 0;

    a {
      color: inherit;
      text-decoration: none;
      font-weight: 400;
      font-size: 24px;
      font-family: $font-tertiary;
    }

    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: $text;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
