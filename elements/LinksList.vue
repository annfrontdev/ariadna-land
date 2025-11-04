<script setup>
defineProps({
  list: Array,
});
defineEmits(["show-section"]);
</script>

<template>
  <ul class="list">
    <li @click="$emit('show-section')" v-for="link in list" :key="link.id">
      <a :href="link.path">
        <span v-if="link.title"> {{ link.title }}</span>

        <NuxtImg :src="link.img" loading="lazy" :alt="link.alt" width="120" />
      </a>
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
