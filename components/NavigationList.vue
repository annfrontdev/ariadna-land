<script lang="ts" setup>
import NavigationButton from '@/components/NavigationButton.vue';
import AriadnaLogo from '@/components/AriadnaLogo.vue';

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

defineEmits(['show-section', 'close']);
</script>

<template>
  <ul v-if="links?.length" class="navigation">
    <div class="navigation__logo">
      <AriadnaLogo />
    </div>
    <button type="button" class="navigation__close" @click="$emit('close')">
      <Icon name="my-icon:cross" size="40" />
    </button>
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

  &__logo, &__close {
    display: none;
  }

  @media (max-width: $tablet) {
    &__logo {
      display: initial;
      text-align: center;
    }

    &__close {
      display: initial;
      position: absolute;
      top: 12px;
      right: 12px;
      padding: 0;
    }
  }
}
</style>
