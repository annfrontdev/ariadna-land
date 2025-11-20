<script setup lang="ts">
type Item = {
  id: number;
  text: string;
};

const { list = [] } = defineProps<{
  list?: Item[];
}>();
</script>

<template>
  <ul class="common-list">
    <li v-for="link in list" :key="link.id">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="link.text" v-html="link.text"></span>
    </li>
  </ul>
</template>

<style lang="scss">
.common-list {
  margin: 0;
  list-style: none;
  padding: 0;

  li {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &::before {
      content: '';
      position: static;
      display: inline-block;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background-color: $text;
      flex-shrink: 0;
      margin-right: 10px;
      vertical-align: middle;
    }
  }

  strong {
    font-weight: 400;
  }
}
</style>
