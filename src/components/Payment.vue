<template>
  <div class="lg:flex block lg:mt-20 mt-10">
    <div class="lg:h-56 lg:w-56 w-screen m-auto h-[75vw] w-[75vw] bg-white flex rounded-lg">
      <img
        class="max-h-full max-w-full box-border m-auto p-5"
        :src="image"
        alt=""
      />
    </div>
    <div class="h-56 flex flex-col place-content-center lg:px-12 dark:text-white text-black lg:w-5/6">
      <div class="text-xl">{{ title }}</div>
      <div class="text-3xl mt-2 mb-4">
        $<span>{{ price * stock }}</span>
      </div>
      <div class="flex">
        <div class="bg-indigo-600 p-4 rounded-lg text-white" @click="reduceCart(id)">
          -
        </div>
        <div class="p-4 dark:text-white; text-black;">{{ stock }}</div>
        <div class="bg-indigo-600 p-4 rounded-lg text-white" @click="addCart(id)">+</div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useBasketState } from "../store/basketStore";
export default {
  name: "Payment",
  props: {
    id: Number,
    title: String,
    description: String,
    category: String,
    image: String,
    stock: Number,
    price: Number,
  },
  setup() {
    const basketState = useBasketState();
    return {
      addCart: computed(() => basketState.add),
      reduceCart: computed(() => basketState.reduce),
    };
  },
};
</script>
