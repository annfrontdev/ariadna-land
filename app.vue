<script setup></script>

<template>
  <div class="app">
    <Header />
    <main>
      <Promo />
      <AboutUs />
      <AromaCandles />
      <AromaDiffusors />
      <FormCandles />
      <BrandCandles />
      <Contacts />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
.app {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>
