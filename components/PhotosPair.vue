<script setup>
defineProps({
  photos: { type: Array, required: true },
  hideEllipse: { type: Boolean, default: false, required: false },
});
</script>
<template>
  <div class="photos-pair">
    <div class="photos-pair__content">
      <NuxtImg
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.img"
        :alt="photo.alt"
      />
    </div>

    <NuxtImg
      v-if="!hideEllipse"
      src="./content/ellipse.svg"
      class="photos-pair__ellipse"
    />
  </div>
</template>

<style lang="scss">
.photos-pair {
  position: relative;

  &__content {
    display: grid;
    grid-template-columns: 371px 171px;
    grid-template-rows: 466px;
    column-gap: 29px;

    img {
      width: 100%;
    }
  }

  &__ellipse {
    position: absolute;
    top: 47%;
    transform: translateY(-50%) rotate(-30deg);
    left: -24%;
    width: 157%;
    height: auto;
    z-index: -1;
  }
}
</style>
