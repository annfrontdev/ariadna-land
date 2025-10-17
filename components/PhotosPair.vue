<script setup>
defineProps({
  photos: { type: Array, required: true },
  hideEllipse: { type: Boolean, default: false, required: false },
});
</script>
<template>
  <div class="photos-pair">
    <div class="photos-pair__content">
      <img v-for="p in photos" :key="p.id" :src="p.img" :alt="p.alt" />
    </div>

    <img
      v-if="!hideEllipse"
      src="/content/ellipse.svg"
      class="photos-pair__ellipse"
      alt="эллипс"
    />
  </div>
</template>

<style lang="scss">
.photos-pair {
  position: relative;

  &__content {
    display: grid;
    grid-template-columns: 371px 171px;

    column-gap: 29px;
    justify-content: center;

    z-index: 1;

    img {
      width: 100%;
    }
  }

  &__ellipse {
    position: absolute;
    top: 55%;
    transform: translateY(-50%) rotate(-35deg);
    transform-origin: center;
    left: -5%;
    width: 110%;
    height: auto;
    z-index: -1;
  }
}
</style>
