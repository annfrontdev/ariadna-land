<script setup>
defineProps({
  list: Array,
});
</script>

<template>
  <ul class="list">
    <li v-for="link in list" :key="link.id">
      <NuxtLink :to="link.path">
        <span v-if="link.title"> {{ link.title }}</span>
        <img v-if="link.img" :src="link.img" width="120" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss">
.list {
  margin: 0;
  list-style: none;
  padding: 0;
}
</style>
