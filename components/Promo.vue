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
          <span ref="titleRef" :style="{ transform: `scale(${stretchFactor})` }"
            >Ariadna premium</span
          >
        </div>
        <img
          src="/content/promo-1.png"
          alt="промо свеча 1"
          class="promo__photo"
        />
        <img
          src="/content/promo-2.png"
          alt="промо свеча 2"
          class="promo__photo"
        />
        <NuxtLink to="/contacts" class="promo__button">
          <span>НАПИСАТЬ НАМ</span>
          <Icon name="my-icon:arrow" size="8" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.promo {
  @include vertical-margin;

  .wrapper {
    display: flex;
    justify-content: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: 395px 395px;
    grid-template-rows: max-content max-content max-content;
    column-gap: 30px;
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
    // border: 1px solid $text;
    padding: 10px 10px 14px 10px;
    box-sizing: border-box;

    span {
      font-family: $font-fourth;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      white-space: nowrap;
      margin: 0;
      display: inline-block;
      transform-origin: left;
    }
  }

  img {
    width: 100%;
  }

  &__photo:nth-of-type(1) {
    grid-column: 1/2;
    grid-row: 2/-1;
  }

  &__photo:nth-of-type(2) {
    grid-column: 2/3;
    grid-row: 1/3;
  }

  a {
    grid-column: 2/3;
    grid-row: 3/-1;
  }

  @media (max-width: $tablet) {
    &__grid {
      grid-template-columns: 40vw 40vw;
      gap: 8px;
    }
  }
}
</style>
