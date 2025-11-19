<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import SPromo from '@/components/SPromo.vue';
import AboutUs from '@/components/AboutUs.vue';
import AromaCandles from '@/components/AromaCandles.vue';
import AromaDiffusors from '@/components/AromaDiffusors.vue';
import FormCandles from '@/components/FormCandles.vue';
import BrandCandles from '@/components/BrandCandles.vue';
import MapAddresses from '@/components/MapAddresses.vue';
import SContacts from '@/components/SContacts.vue';
</script>

<template>
  <div class="app">
    <MainHeader />
    <main>
      <SPromo />
      <AboutUs />
      <AromaCandles />
      <AromaDiffusors />
      <FormCandles />
      <BrandCandles />
      <MapAddresses />
      <SContacts />
    </main>
    <MainFooter />
  </div>
</template>

<style lang="scss">
.app {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>
