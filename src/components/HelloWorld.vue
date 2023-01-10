<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

defineProps<{
  msg: string;
}>();
onMounted(() => {
  fetchData();
})

let productData = ref(undefined);

let productOfTheDay = computed(() => {
  return productData.value && productData.value['product-of-the-day']
})

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

  console.log(productOfTheDay)
}
</script>

<template>
  <div class="greetings">
    <div v-for="(products, category, index) in productData" :key="index" >
      {{ category }}
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
