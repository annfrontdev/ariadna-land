<script setup>
import AriadnaLogo from "~/elements/AriadnaLogo.vue";
import LinksList from "~/elements/LinksList.vue";

const links = [
  { id: 1, title: "Аромасвечи", path: "#candles" },
  { id: 2, title: "Диффузоры", path: "#diffusers" },
  { id: 3, title: "Мерч", path: "#brand" },
  { id: 4, title: "Контакты", path: "#contacts" },
];

const headerLinks = {
  left: [...links.slice(0, links.length / 2)],
  right: [...links.slice(links.length / 2)],
};

const menuIsVisible = ref(false);

const toggleMenu = () => {
  menuIsVisible.value = !menuIsVisible.value;

  document.body.style.overflow = menuIsVisible.value ? "hidden" : "auto";
};

function closeMenu() {
  menuIsVisible.value = false;
  document.body.style.overflow = "auto";
}

onMounted(() => {
  window.addEventListener("resize", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("resize", closeMenu);
});
</script>

<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <nav class="header__nav-mobile" aria-label="Меню">
        <div></div>
        <AriadnaLogo />
        <button type="button" @click="toggleMenu" class="header__menu-opener">
          <Icon name="my-icon:burger" size="60" />
        </button>
      </nav>

      <nav class="header__nav-desktop" aria-label="Меню">
        <LinksList :list="headerLinks.left"></LinksList>

        <AriadnaLogo />

        <LinksList :list="headerLinks.right"></LinksList>
      </nav>

      <Transition name="slide-fade">
        <div
          v-if="menuIsVisible"
          class="header__mobile-menu"
          :class="{ open: menuIsVisible }"
        >
          <div class="header__menu-backdrop" @click="toggleMenu"></div>
          <LinksList :list="links"></LinksList>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.header {
  background-color: $primary;

  nav {
    width: 100%;
    position: relative;
    justify-content: space-between;
  }

  svg,
  button {
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

  &__nav-mobile {
    display: none;
  }

  &__nav-desktop {
    display: flex;
  }

  &__menu-opener {
    display: none;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
  }

  &__menu-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($text, 0.4);
  }

  @media (max-width: $tablet) {
    &__nav-mobile {
      display: grid;
      grid-template-columns: max-content 1fr max-content;
      align-items: center;
    }

    &__nav-desktop {
      display: none;
    }

    &__wrapper {
      justify-content: flex-end;
      padding-top: 16px;
      padding-bottom: 16px;
    }

    nav {
      width: 60%;

      ul {
        display: none;
      }
    }

    &__menu-opener {
      display: flex;
    }

    &__mobile-menu {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 100;
      box-sizing: border-box;

      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        background: #fff;
        height: 100%;
        position: relative;
        z-index: 1;
        max-width: 300px;
      }
    }
  }
}
</style>
