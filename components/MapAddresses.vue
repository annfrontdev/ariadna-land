<script lang="ts" setup>
import SectionTitle from '@/elements/SectionTitle.vue';

const addresses = [
  {
    id: 1,
    title: 'Студия йоги "Намастейша"',
    address: 'ул. Рылеева, 63, Тамбов',
    link: '',
  },
  {
    id: 2,
    title: 'Цветочный салон "YOU"',
    address: 'ул. Чичерина, 23, Тамбов',
    link: '',
  },
  {
    id: 3,
    title: 'Художественный салон "Бродячая рыба"',
    address: 'Советская ул., 75, Тамбов',
    link: '',
  },
  {
    id: 4,
    title: '“PROбег” спортивный магазин',
    address: 'ул. Карла Маркса, 161А, Тамбов',
    link: '',
  },
];

const overlayRef = ref();

const openMap = () => {
  overlayRef.value.style.display = 'none';

  setTimeout(() => {
    overlayRef.value.style.display = 'block';
  }, 5000);
};
</script>

<template>
  <div class="map-addresses">
    <div class="wrapper map-addresses__wrapper">
      <div>
        <SectionTitle>Магазины-партнеры</SectionTitle>
        <p class="map-addresses__list-title">Ищите наши свечи по адресам:</p>
        <ul>
          <li v-for="address in addresses" :key="address.id">
            <p>{{ address.title }}</p>
            <p>{{ address.address }}</p>
          </li>
        </ul>
      </div>

      <div class="map-addresses__map" @click="openMap">
        <div ref="overlayRef" class="map-addresses__overlay" />
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f9ae94a5dba176e4dac51c9cdaecfcca9dd62a555f0ceaf6ae8f4fd2e74c0cb&amp;source=constructor"
          width="100%"
          height="400"
          title="Yandex map" />
        <p>Нажмите на карту для взаимодействия</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.map-addresses {
  background-color: #fff;
  padding: 55px 0;

  p {
    margin: 0;
  }

  h2 {
    margin-bottom: 40px;
  }

  ul {
    margin: 0;
    margin-top: 40px;
    display: grid;
    gap: 20px;
  }

  &__map {
    position: relative;

    p {
      text-align: center;
      margin-top: 4px;
      display: none;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
  }

  &__list-title {
    font-weight: 400;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 100px;
    align-items: flex-end;
  }

  @media (max-width: $tablet) {
    &__map {
      p {
        display: block;
      }
    }
    &__overlay {
      display: block;
    }

    &__wrapper {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }
}
</style>
