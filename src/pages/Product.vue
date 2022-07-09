<template>
  <ProductContents :id="$route.params.productId" />
</template>
<script>
import ProductContents from "../components/ProductContents.vue";
// import { useProductStore } from "../store/productStore";
export default {
  name: "Product",
  components: { ProductContents },
  setup() {
    // const productStore = useProductStore();
    // return {
    //   data: computed(() => productStore.idloader),
    // };
  },
};
</script>
