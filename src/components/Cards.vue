<template>
  <div v-for="category in categorys" :key="category">
    <Card :items="list[category]" :category="category" />
  </div>
</template>

<script>
import { computed } from "vue";
import Card from "./Card.vue";
import { useProductStore } from "../store/productStore";
export default {
  setup() {
    const productStore = useProductStore();
    return {
      list: computed(() => productStore.productList),
      categorys: computed(() => productStore.categoryList),
    };
  },

  name: "Cards",
  data() {
    return {
      products: [],
      keys: [],
    };
  },
  components: {
    Card,
  },
};
</script>
