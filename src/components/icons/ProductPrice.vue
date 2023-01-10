<template>
  <div class="product-price">
    <p v-if="isOnSale" class="product-price__price--old">{{ regular }}</p>
    <p :class="`product-price__price${isOnSale && '--promotion'}`">
      {{ current }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ProductPrice } from "@/types/ProductData";
import { computed, toRefs } from "vue";

const props = defineProps<{ price: ProductPrice }>();

const { current, regular } = toRefs(props.price);

const isOnSale = computed(() => {
  return (
    regular.value &&
    current.value !== regular.value &&
    current.value < regular.value
  );
});
</script>

<style lang="scss" scoped>
.product-price {
  display: flex;

  &__price {
    &--old {
      margin-right: 0.25em;
      text-decoration: line-through;
      opacity: 0.5;
    }
    &--promotion {
      color: red;
    }
  }
}
</style>
