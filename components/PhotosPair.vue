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
  width: 100%;

  &__content {
    flex-grow: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 50% 20%;
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
