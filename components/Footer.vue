<script setup>
import { products } from "~/content/links";
import LinksList from "~/elements/LinksList.vue";
</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__lists">
        <NuxtLink to="/about">О нас</NuxtLink>
        <LinksList :list="products"></LinksList>
        <NuxtLink to="/about">Бесплатный чек-лист</NuxtLink>
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
}
</style>
