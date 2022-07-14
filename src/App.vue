<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Category/Sidebar.vue"
import { useProductStore } from "./store/productStore";
import { useDarkMode } from "./store/darkMode";
export default {
  setup() {
    const productStore = useProductStore();
    const darkMode = useDarkMode();
    productStore.fetchProduct();
    darkMode.colorSet();
  },
  components: { Header, Footer, Sidebar },
  name: "App",
};
</script>
<template>
  <div class="dark:bg-stone-800">
    <Header></Header>
    <div class="max-w-7xl m-auto min-section py-16 px-8">
      <router-view></router-view>
    </div>
    <Footer></Footer>
    <Sidebar/>
  </div>

</template>

<style>
.min-section{
    min-height: calc( 100vh - 425px );
}
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
