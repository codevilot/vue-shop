<template>
  <div class="flex items-center">
    <div class="flex">
      <div class="drawer-content sm:hidden flex items-center ">
      <label for="sidebar" class="drawer-button ">
      </label>
      </div>
      <label
        for="sidebar"
        class="self-center lg:hidden"
      >
      <img
      src="../../../public/icon/menu.png"
      class="w-5 h-5 invert-0 darkmode lg"
      />
      </label>

      <router-link to="/" class="text-black dark:text-white font-bold ml-3 flex">
        Vue Shop
      </router-link>
    </div>
    <ul class="hidden md:flex">
      <li class="pl-3" v-for="category in categorys" :key="category">
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
