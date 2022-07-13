<template>
  <div class="flex mb-20">
    <div class="h-56 w-56 bg-white flex">
      <img
        class="max-h-full max-w-full box-border m-auto p-5"
        :src="image"
        alt=""
      />
    </div>
    <div class="h-56 flex flex-col place-content-center lg:px-12">
      <div class="text-white text-xl">{{ title }}</div>
      <div class="text-white text-3xl mt-2 mb-4">
        $<span>{{ price * stock }}</span>
      </div>
      <div class="text-white flex">
        <div class="bg-indigo-600 p-4 rounded-lg" @click="reduceCart(id)">
          -
        </div>
        <div class="p-4">{{ stock }}</div>
        <div class="bg-indigo-600 p-4 rounded-lg" @click="addCart(id)">+</div>
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
