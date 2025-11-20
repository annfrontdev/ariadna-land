<script setup lang="ts">
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import SPromo from '@/components/sections/SPromo.vue';
import SAboutUs from '@/components/sections/SAboutUs.vue';
import SAromaCandles from '@/components/sections/SAromaCandles.vue';
import SAromaDiffusors from '@/components/sections/SAromaDiffusors.vue';
import SFormCandles from '@/components/sections/SFormCandles.vue';
import SBrandCandles from '@/components/sections/SBrandCandles.vue';
import SMapAddresses from '@/components/sections/SMapAddresses.vue';
import SContacts from '@/components/sections/SContacts.vue';
</script>

<template>
  <div class="app">
    <MainHeader />
    <main>
      <SPromo />
      <SAboutUs />
      <SAromaCandles />
      <SAromaDiffusors />
      <SFormCandles />
      <SBrandCandles />
      <SMapAddresses />
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
