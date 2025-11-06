<script setup lang="ts">
import SectionTitle from '@/elements/SectionTitle.vue';

import regularTelegram from '@/assets/photos/regular/telegram.webp';
import retinaTelegram from '@/assets/photos/retina/telegram.webp';

import regularWhatsapp from '@/assets/photos/regular/whatsapp.webp';
import retinaWhatsapp from '@/assets/photos/retina/whatsapp.webp';

import regularVk from '@/assets/photos/regular/vk.webp';
import retinaVk from '@/assets/photos/retina/vk.webp';

const contacts = [
  {
    id: 1,
    path: 'https://t.me/ZaryaVechernyaya',
    alt: 'telegram логотип',
    regular: regularTelegram,
    retina: retinaTelegram,
  },
  {
    id: 2,
    path: 'https://wa.me/79108544377',
    alt: 'whatsapp логотип',
    regular: regularWhatsapp,
    retina: retinaWhatsapp,
  },
  {
    id: 3,
    path: 'https://vk.com/ldrswg',
    alt: 'vk логотип',
    regular: regularVk,
    retina: retinaVk,
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
              <img
                :src="link.regular"
                :alt="link.alt"
                :srcset="`${link.retina} 2x`"
                loading="lazy"
                width="120" />
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
      transition: all 0.3s ease;
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
