<template>
  <Carousel :wrap-around="true">
    <Slide v-for="ban in banner" :key="ban  .id">
        <div key={banner.id} class="lg:h-[35rem] h-80 bg-cover w-screen" :style="{ backgroundImage: 'url(' + ban.img + ')' }">
          <div class="absolute inset-y-1/2 inset-x-1/4 pl-5">
            <div class="text-2xl text-left">{{ban.title}}</div>
            <div class="text-xs text-left pt-1 pb-2">{{ban.desc}}</div>

            <router-link
              class="float-left text-white bg-stone-900 p-2 rounded-lg text-xs"
              to={{ban.link}}
            >
              바로가기 ➜
            </router-link>
          </div>
        </div>
    </Slide>


    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import banners from "../../public/data/json/banner.json";
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
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