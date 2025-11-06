<script lang="ts" setup>
import NavigationButton from "@/elements/NavigationButton.vue";

type Link = {
  id: number;
  title: string;
  path: string;
};

withDefaults(
  defineProps<{
    links?: Link[];
  }>(),
  {
    links: () => [],
  }
);

defineEmits(["show-section"]);
</script>

<template>
  <ul v-if="links?.length" class="navigation">
    <li v-for="link in links" :key="link.id" @click="$emit('show-section')">
      <NavigationButton :link="link.path">
        {{ link.title }}
      </NavigationButton>
    </li>
  </ul>
</template>

<style lang="scss">
.navigation {
  @include reset-list;

  button {
    @include font-tertiary;
    color: inherit;
    font-size: 24px;
    border: none;
    background: transparent;
  }
}
</style>
