<template>
  <div class="dark:bg-black bg-white h-12 p-2">
    <div class="flex justify-between max-w-7xl">
      <Category />
      <Controlbar />
    </div>
  </div>
</template>
<script>
import Category from "./Category.vue";
import Controlbar from "./Controlbar.vue";
export default {
  components: {
    Category,
    Controlbar,
  },
  name: "Headnav",
};
</script>
