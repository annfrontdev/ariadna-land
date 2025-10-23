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

        <div class="promo__photo">
          <img src="/content/promo-2.jpg" alt="промо свеча 2" />
        </div>

        <div class="promo__photo">
          <img src="/content/promo-1.jpg" alt="промо свеча 1" />
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    border-bottom-left-radius: clamp(80px, 10vw, 140px);

    &:nth-of-type(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      border-radius: 0;
      border-top-right-radius: clamp(80px, 10vw, 140px);
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
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    &__button {
      font-size: 12px;
      span:last-child {
        display: none;
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
