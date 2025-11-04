<script setup>
defineProps({
  list: Array,
});
defineEmits(["show-section"]);
</script>

<template>
  <ul class="list">
    <li @click="$emit('show-section')" v-for="link in list" :key="link.id">
      <NuxtLink :href="link.path">
        <span v-if="link.title"> {{ link.title }}</span>

        <img :src="link.img" loading="lazy" :alt="link.alt" width="120" />
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
