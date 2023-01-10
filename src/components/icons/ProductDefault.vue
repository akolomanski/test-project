<template>
  <div class="product-default">
    <img class="product-default__image" :src="productData?.image" alt="" />
    <ProductBadges class="product-default__badges" :badges="badges" />
    <div class="product-default__info">
      <p>{{ name }}</p>
      <ProductPrice :price="price" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/ProductData";
import { toRefs } from "vue";
import ProductPrice from "./ProductPrice.vue";
import ProductBadges from "./ProductBadges.vue";

const props = defineProps<{
  productData: Product;
}>();

const { image, name, price, amount, rating, badges, addedToWishlist } = toRefs(
  props.productData
);
</script>

<style lang="scss" scoped>
.product-default {
  position: relative;
  padding: 10px;
  height: 33vw;
  width: 33%;

  &__image {
    object-fit: cover;
    width: 100%;
    height: calc(100% - 50px);
  }

  &__info {
    width: 100%;
    height: 100px;
  }

  &__badges {
    position: absolute;
    bottom: 25px;
    right: 0;
  }
}
</style>
