<script setup>
const titleRef = ref();
const titleWrapperRef = ref();
const stretchFactor = ref(1);

function updateStretch() {
  const containerWidth = titleWrapperRef.value.offsetWidth;
  const textWidth = titleRef.value.offsetWidth;
  stretchFactor.value = containerWidth / textWidth - 0.2;
}

onMounted(() => {
  updateStretch();
  window.addEventListener("resize", updateStretch);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateStretch);
});

const promo_images = [
  { path: "content/promo-1.webp", alt: "промо свеча 1" },
  { path: "content/promo-2.webp", alt: "промо свеча 2" },
];
</script>

<template>
  <div class="promo">
    <div class="wrapper">
      <div class="promo__grid">
        <div class="promo__title" ref="titleWrapperRef">
          <span
            ref="titleRef"
            :style="{ transform: `scale(${stretchFactor})` }"
          >
            Ariadna premium</span
          >
        </div>

        <div v-for="im in promo_images" class="promo__photo">
          <NuxtImg :src="im.path" :alt="im.alt" /> 
        </div>

        <NuxtLink to="/contacts" class="promo__button">
          <span>НАПИСАТЬ НАМ</span>
          <Icon name="my-icon:arrow" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.promo {
  @include vertical-margin;
  display: flex;
  justify-content: center;

  &__grid {
    display: grid;
    grid-template-columns: 395px 395px;
    grid-template-rows: max-content max-content max-content;
    gap: 2%;
    justify-content: center;
  }

  &__button {
    border: 1px solid $text;
    padding: 13px 20px;
    color: inherit;
    text-decoration: none;
    font-size: 14px;
    width: fit-content;
    min-width: min-content;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    gap: 14px;
  }

  &__title {
    grid-column: 1/2;
    grid-row: 1/2;
    width: 100%;
    padding: 10px 10px 14px 10px;
    box-sizing: border-box;

    span {
      @include font-fourth;
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      white-space: nowrap;
      margin: 0;
      display: inline-block;
      transform-origin: left;
    }
  }

  &__photo {
    @include photo-bg;
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    border-bottom-left-radius: $lg-radius;
    min-height: 150px;

    &:nth-of-type(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      border-radius: 0;
      border-top-right-radius: $lg-radius;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  a {
    grid-column: 2 / 3;
    grid-row: 3 / -1;
  }

  &__button {
    span:last-child {
      width: 2rem;
    }
  }

  @media (max-width: $tablet) {
    &__grid {
      gap: 8px;
    }

    &__button {
      font-size: 12px;
      span:last-child {
        display: none;
      }
    }
  }

  @media (max-width: $mobile-tablet) {
    &__grid {
      grid-template-columns: 50% 50%;
    }

    &__photo {
      border-bottom-left-radius: $s-radius;

      &:nth-of-type(2) {
        border-top-right-radius: $s-radius;
      }
    }
  }

  @media (max-width: $mobile) {
    &__title {
      padding: 2px;
      padding-left: 2px;
    }
    &__button {
      padding: 4px 8px;
      font-size: 10px;

      span:last-child {
        display: none;
      }
    }
  }
}
</style>
