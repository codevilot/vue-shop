<template>
  <CategoryCard
    :items="list[$route.params.categoryId]"
    :category="$route.params.categoryId"
  />
</template>

<script>
import { computed } from "vue";
import CategoryCard from "./CategoryCard.vue";
import { useProductStore } from "../../store/productStore";
export default {
  name: "CategoryContents",
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
    CategoryCard,
  },
};
</script>
