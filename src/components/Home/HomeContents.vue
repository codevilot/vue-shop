<template>
  <div v-for="category in categorys" :key="category">
    <HomeCard :items="list[category].slice(0, 4)" :category="category" />
  </div>
</template>

<script>
import { computed } from "vue";
import HomeCard from "./HomeCard.vue";
import { useProductStore } from "../../store/productStore";
export default {
  name: "HomeContents",
  setup() {
    const productStore = useProductStore();
    return {
      list: computed(() => productStore.productList),
      categorys: computed(() => productStore.categoryList),
    };
  },

  data() {
    return {
      products: [],
      keys: [],
    };
  },
  components: {
    HomeCard,
  },
};
</script>
