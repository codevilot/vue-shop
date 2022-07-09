<script>
import Header from "./components/Header/Header.vue";
import { useProductStore } from "./store/productStore";
export default {
  setup() {
    const productStore = useProductStore();
    productStore.fetchProduct();
  },
  components: { Header },
  name: "App",
};
</script>
<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style>
body {
  margin: 0px;
}
ul,
li,
a {
  list-style: none;
  text-decoration: auto;
  padding: 0;
  margin: 0;
}
</style>
