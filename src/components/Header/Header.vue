<template>
  <div class="dark:bg-black bg-white h-fit fixed w-full pt-2 pb-2 z-10">
    <div class="flex justify-between max-w-7xl m-auto px-3">
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
<style>
.dark .darkmode {
  filter: invert(100%);
}</style>