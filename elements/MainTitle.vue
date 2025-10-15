<template>
  <h1 class="main-title">
    <slot></slot>
  </h1>
</template>

<style lang="scss">
.main-title {
  font-family: $font-fourth;
  font-weight: 400;
  font-size: 41px;
  text-transform: uppercase;
  margin-bottom: 40px;
  white-space: nowrap;
  margin: 0;
  padding: 10px 10px 14px 10px; 
}
</style>
