<script lang="ts" setup>
import { scrollToSection } from '@/utils/scroll';

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
