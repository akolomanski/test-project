<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import ProductList from "./components/ProductList.vue";
import HeroProduct from "./components/HeroProduct.vue";
import type { ProductData } from "@/types/ProductData";

onMounted(() => {
  fetchData();
});

const productData = ref<ProductData>();

const productOfTheDay = computed(() => {
  return productData.value?.productOfTheDay;
});
const lists = computed(() => {
  if (!productData?.value) {
    return;
  }
  const { bestSales, recommendedForYou } = productData.value;
  return { bestSales, recommendedForYou };
});

const fetchData = async () => {
  const response = await fetch("http://localhost:3001/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  if (response.status != 200) {
    throw response.status;
  }

  productData.value = await response.json();
};
</script>

<template>
  <div>
    <HeroProduct v-if="productOfTheDay" :productData="productOfTheDay" />
    <ProductList
      v-for="(products, category, index) in lists"
      :category="category"
      :products="products"
      :key="index"
    />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
