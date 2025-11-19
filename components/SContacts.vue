<script setup lang="ts">
import SectionTitle from '@/elements/SectionTitle.vue';

import telegram from '@/assets/images/telegram.png';
import whatsapp from '@/assets/images/whatsapp.png';
import vk from '@/assets/images/vk.png';

const contacts = [
  {
    id: 1,
    path: 'https://t.me/ZaryaVechernyaya',
    alt: 'telegram логотип',
    img: telegram,
  },
  {
    id: 2,
    path: 'https://wa.me/79108544377',
    alt: 'whatsapp логотип',
    img: whatsapp,
  },
  {
    id: 3,
    path: 'https://vk.com/ldrswg',
    alt: 'vk логотип',
    img: vk,
  },
];
</script>

<template>
  <section id="contacts" class="contacts">
    <div class="wrapper">
      <div class="contacts__content">
        <SectionTitle>Написать нам</SectionTitle>
        <p>задать вопрос или запросить прайс</p>

        <ul class="contacts__list">
          <li v-for="link in contacts" :key="link.id">
            <a :href="link.path">
              <img :src="link.img" :alt="link.alt" loading="lazy" width="120">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contacts {
  @include vertical-margin;
  @include horizontal-padding;
  display: grid;
  text-align: center;

  p {
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    margin: 0;
    margin-bottom: 28px;
  }

  &__list {
    @include reset-list;
    display: flex;
    gap: 70px;
    justify-content: center;

    img {
      width: 120px;
      height: 120px;
    }

    li {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    li:hover {
      transform: scale(1.1);
    }

    li:active {
      transform: scale(0.9);
    }
  }

  @media (max-width: $tablet) {
    margin-top: 20px;
    margin-bottom: 20px;

    p {
      font-size: 22px;
      line-height: 30px;
    }

    h2 {
      margin-bottom: 0;
    }

    &__list {
      gap: 16px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
