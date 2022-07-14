<script>
import { computed } from "vue";
import { useDarkMode } from "../../store/darkMode";
import { useBasketState } from "../../store/basketStore"
export default {
  name: "Controlbar",
  data(){
    return {
      openState : false
    }
  },
  setup() {
    const darkMode = useDarkMode();
    const basketStore = useBasketState()
    return {
      toggleDarkMode: computed(() => darkMode.toggleDarkMode),
      basketAll: computed(() => basketStore.basketCount),
    };
  },
  methods:{
    openSearch (){
      this.openState = !this.openState
      return this.openState
    }
  }
};
</script>
<template>
  <div class="items-center flex">
    <img @click="this.openSearch" class="w-6 h-6 mr-5 lightmode darkmode sm:hidden block" src="../../../public/icon/search.png" alt="" />
    <img @click="toggleDarkMode" class="w-7 h-7 mr-5 lightmode darkmode" src="../../../public/icon/sun.png" alt="" />
    <input type="text" class="fixed top-[-5rem] opacity-0 sm:opacity-100 sm:static input mr-5 h-10 rounded-lg dark:bg-slate-500 dark:text-white bg-slate-200"/>
    <router-link to="/cart">
      <button class="relative bg-transparent border-0">
        <img class="w-7 h-7 pr-2 lightmode darkmode" src="../../../public/icon/bag.png" alt="" />
        <div
          className="bg-red-500 w-5 h-5 flex justify-center items-center rounded-lg text-xs absolute bottom-1/2 left-1/2">
          {{ basketAll }}
        </div>
      </button>
    </router-link>
  </div>
</template>

