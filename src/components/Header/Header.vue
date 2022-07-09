<template>
  <div class="dark:bg-black bg-white h-12 p-2">
    <div class="flex justify-between max-w-7xl m-auto">
      <CategoryLink />
      <Controlbar />
    </div>
  </div>
</template>
<script>
import CategoryLink from "./CategoryLink.vue";
import Controlbar from "./Controlbar.vue";
export default {
  components: {
    CategoryLink,
    Controlbar,
  },
  name: "Header",
};
</script>
