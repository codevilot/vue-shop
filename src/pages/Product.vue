<template>
  <ProductContents :id="Number($route.params.productId)" />
</template>
<script>
import { computed } from "vue";
import { useProductStore } from "../store/productStore";
import ProductContents from "../components/Product/ProductContents.vue";
export default {
  name: "Product",
  components: { ProductContents },
  setup() {
    const productStore = useProductStore();
    return {
      data: computed(() => productStore.idloader),
    };
  },
};
</script>
