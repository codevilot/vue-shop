<script>
import { computed } from "vue";
import { useDarkMode } from "../../store/darkMode";
export default {
  name: "Controlbar",
  setup() {
    const darkMode = useDarkMode();
    return {
      toggleDarkMode: computed(() => darkMode.toggleDarkMode),
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
    <img
      class="w-7 h-7 ml-5 mr-5 lightmode darkmode"
      src="../../../public/icon/bag.png"
      alt=""
    />
  </div>
</template>
<style>
.dark .darkmode {
  filter: invert(100%);
}
</style>
