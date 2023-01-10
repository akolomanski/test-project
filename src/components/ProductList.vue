<template>
  <div class="product-list">
    <h2 class="product-list__title">{{ title }}</h2>
    <div class="product-list__list">
      <ProductDefault
        v-for="(product, key) in products"
        :productData="product"
        :key="key"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Product } from "@/types/ProductData";
import ProductDefault from "./icons/ProductDefault.vue";
import { startCase } from "lodash";

const props = defineProps<{
  category: string;
  products: [Product];
}>();

const title = computed(() => {
  return startCase(props.category);
});
</script>

<style lang="scss" scoped>
.product-list {
  &__title {
    font-size: 40px;
    margin: auto;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
