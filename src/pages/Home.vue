<template>
  <Carousel />
  <HomeContents />
</template>
<script>
import Carousel from "../components/Carousel.vue";
import HomeContents from "../components/Home/HomeContents.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    HomeContents,
  },
};
</script>
