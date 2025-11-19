<script setup lang="ts">
import { ref } from 'vue';
import AriadnaLogo from '@/elements/AriadnaLogo.vue';
import NavigationList from '@/components/NavigationList.vue';

const links = [
  { id: 1, title: 'Аромасвечи', path: 'candles' },
  { id: 2, title: 'Диффузоры', path: 'diffusers' },
  { id: 3, title: 'Мерч', path: 'brand' },
  { id: 4, title: 'Контакты', path: 'contacts' },
];

const headerLinks = {
  left: links.slice(0, links.length / 2),
  right: links.slice(links.length / 2),
};

const isMenuVisible = ref(false);

function openMenu() {
  isMenuVisible.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  isMenuVisible.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <nav class="header__nav-mobile" aria-label="Меню">
        <div />
        <AriadnaLogo />
        <button type="button" class="header__menu-opener" @click="openMenu">
          <Icon name="my-icon:burger" size="60" />
        </button>
      </nav>

      <nav class="header__nav-desktop" aria-label="Меню">
        <NavigationList :links="headerLinks.left" />
        <AriadnaLogo />
        <NavigationList :links="headerLinks.right" />
      </nav>

      <Transition name="slide-fade">
        <div v-if="isMenuVisible" class="header__mobile-menu" :class="{ open: isMenuVisible }">
          <div class="header__overlay" @click="closeMenu" />
          <NavigationList :links="links" @show-section="closeMenu" @close="closeMenu" />
        </div>
      </Transition>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: $primary;
  position: relative;

  button {
    @include button-nav;
  }

  nav {
    width: 100%;
    position: relative;
    justify-content: space-between;
    padding: 50px 0 40px 0;
  }

  svg,
  button {
    flex-shrink: 0;
  }

  &__wrapper {
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: $text;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__overlay,
  &__nav-mobile,
  &__mobile-menu.open,
  &__mobile-menu {
    display: none;
  }

  &__nav-desktop {
    display: flex;

    ul {
      display: flex;
      gap: 50px;
    }
  }

  &__menu-opener {
    display: none;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($text, 0.4);
  }

  @media (max-width: $tablet) {
    nav {
      padding-top: 16px;
      padding-bottom: 16px;
      width: 60%;

      ul {
        display: none;
      }
    }

    &__nav-desktop {
      display: none;
    }

    &__nav-mobile {
      display: grid;
      grid-template-columns: max-content 1fr max-content;
      align-items: center;
    }

    &__mobile-menu.open,
    &__mobile-menu.open .header__overlay {
      display: block;
    }

    &__wrapper {
      display: flex;
      justify-content: flex-end;
    }

    &__menu-opener {
      display: flex;
    }

    &__mobile-menu {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      box-sizing: border-box;

      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        background: #fff;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 1;
        width: 300px;
      }
    }
  }

  // TRANSITION
  .slide-fade-enter-active {
    transition: all 0.2s ease;

    ul {
      transition: all 0.2s ease-in-out;
    }
  }

  .slide-fade-leave-active {
    transition: all 0.2s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;

    ul {
      transform: translateX(100%);
    }
  }
}
</style>
