<template>
  <div v-if="data[id]">
    <div class="lg:flex items-center">
      <div class="view_image m-5 lg:m-0 p-4 bg-white min-w-1/4 rounded-lg h-fit bg-contain bg-no-repeat bg-center lg:h-72 h-[50vw]" :style="{ backgroundImage: 'url(' + data[id].image + ')' }">
  
      </div>
      <div class="p-8 dark:text-white text-black">
        <div class="text-3xl">{{ data[id].title }}</div>
        <div class="text-xl">{{ data[id].description }}</div>
        <div class="flex pt-5">
          <div class="score" 
          :style="
          {background:'-webkit-linear-gradient(180deg, gray '+(100-data[id].rating.rate*20)+'%, yellow 1%)',
            width:'fit-content',
            '-webkit-text-fill-color':'transparent',
            '-webkit-background-clip':'text'
          }"
         >⭐⭐⭐⭐⭐</div> 
          
          <div class="pl-3 text-xl">{{ data[id].rating.rate }}</div>
          <div class="pl-3 text-xl">{{ data[id].rating.count }}참여</div>
        </div>
        <div class="text-3xl pt-5">${{ data[id].price }}</div>
        <div class="flex pt-5 dark:text-white">
          <div
            @click="add(id)"
            class="bg-indigo-800 p-5 border-indigo-800 border-2 rounded-lg mr-5 text-white"
          >
            장바구니에 담기
          </div>
          <div class="p-5 border-2 rounded-lg">장바구니로 이동</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useProductStore } from "../../store/productStore";
import { useBasketState } from "../../store/basketStore";
export default {
  name: "ProductContents",
  setup() {
    const productStore = useProductStore();
    const basketState = useBasketState();
    return {
      data: computed(() => productStore.idloader),
      add: computed(() => basketState.add),
    };
  },
  props: {
    id: Number,
  },
};
</script>
