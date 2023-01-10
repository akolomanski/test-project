<template>
  <div class="product-badges">
    <span
      v-if="newProduct"
      class="product-badges__badge product-badges__badge--new"
      >NEW</span
    >
    <span
      v-if="collectionSale"
      class="product-badges__badge product-badges__badge--sale"
      >SALE</span
    >
    <span
      v-if="lastItems"
      class="product-badges__badge product-badges__badge--last"
      >LOW STOCK</span
    >
  </div>
</template>

<script setup lang="ts">
import type { ProductBadges } from "@/types/ProductData";
import { toRefs } from "vue";

const props = defineProps<{ badges: ProductBadges }>();

const { newProduct, collectionSale, lastItems } = toRefs(props.badges);
</script>

<style lang="scss" scoped>
.product-badges {
  padding: 0px 10px;
  &__badge {
    padding: 5px 10px;
    margin: 0px 5px;
    margin-bottom: 5px;
    width: 7em;
    text-align: center;

    &--new {
      background-color: yellow;
    }
    &--sale {
      background-color: red;
    }
    &--last {
      background-color: grey;
    }
  }
}
</style>
