<template>
  <h2 class="section-title">
    <slot/>
  </h2>
</template>

<style lang="scss">
.section-title {
  @include font-secondary;

  font-size: 51px;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 40px;

  @media (max-width: $tablet) {
    font-size: 31px;
  }
}
</style>
