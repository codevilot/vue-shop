<template>
  <Carousel/>
  <Cards/>
</template>
<script>
import Carousel from "../components/Carousel.vue"
import Cards from "../components/Cards.vue"
// import Cards from ".../components/Cards.vue"
export default {
  name: "Home",
  components:{Carousel, 
  Cards
  },
};
</script>
