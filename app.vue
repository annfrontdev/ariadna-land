<script setup lang="ts"></script>

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
