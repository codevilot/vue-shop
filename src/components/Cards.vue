<template>
  asdf
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import banners from "../../public/data/json/banner.json";
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Cards',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data(){
    return{ banner : [...banners]
 } }
 
});
</script>