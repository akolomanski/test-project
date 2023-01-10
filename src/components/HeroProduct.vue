<template>
  <div class="hero-product">
    <img :src="image" alt="" class="hero-product__image" />
    <div class="hero-product__info">
      <p class="hero-product__name">{{ name }}</p>
      <ProductPrice :price="price" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/ProductData";
import { toRefs } from "vue";
import ProductPrice from "./icons/ProductPrice.vue";

const props = defineProps<{
  productData: Product;
}>();

const { image, name, price, amount, rating, badges, addedToWishlist } = toRefs(
  props.productData
);
</script>

<style lang="scss" scoped>
.hero-product {
  width: 100%;
  height: 100vh;
  position: relative;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    position: absolute;
    width: 33%;
    height: 140px;
    background-color: var(--vt-c-white-mute);
    bottom: 0;
    right: 0;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__name {
    font-size: 33px;
  }
}
</style>
