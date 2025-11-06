<script lang="ts" setup>
interface Props {
  link?: string;
}

const props = defineProps<Props>();
function handleClick() {
  if (!props.link) return;
  scrollToSection(props.link);
}
</script>

<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>
