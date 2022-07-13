<script>
import { computed } from "vue";
import { useDarkMode } from "../../store/darkMode";
import {useBasketState} from "../../store/basketStore"
export default {
  name: "Controlbar",
  setup() {
    const darkMode = useDarkMode();
    const basketStore = useBasketState()
    return {
      toggleDarkMode: computed(() => darkMode.toggleDarkMode),
      basketAll: computed(() => basketStore.basketCount),
    };
  },
};
</script>
<template>
  <div class="items-center flex">
    <img
      @click="toggleDarkMode"
      class="w-7 h-7 mr-5 lightmode darkmode"
      src="../../../public/icon/sun.png"
      alt=""
    />

    <input type="text" class="h-11" />
    <router-link to="/cart">
      <button class="relative bg-transparent">
        <img
        class="w-7 h-7 ml-5 mr-5 lightmode darkmode"
        src="../../../public/icon/bag.png"
        alt=""
      />
      <div className="bg-red-500 w-5 h-5 flex justify-center items-center rounded-lg text-xs absolute bottom-1/2 left-1/2">
        {{basketAll}}
      </div>
        </button>
    </router-link>
  </div>
</template>

