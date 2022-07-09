<template>
  <div class="flex items-center">
    <div>
      <router-link to="/" class="text-black dark:text-white font-bold">
        Vue Shop
      </router-link>
    </div>
    <ul class="flex" v-for="category in categorys" :key="category">
      <li class="pl-5">
        <router-link :to="'/' + category" class="text-black dark:text-white">
          {{ category }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed } from "vue";
import { useProductStore } from "../../store/productStore";
export default {
  name: "CategoryLink",
  setup() {
    const productStore = useProductStore();
    return {
      categorys: computed(() => productStore.categoryList),
    };
  },
};
</script>
