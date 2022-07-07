<template>
  <div class="flex items-center">
    <div>
      <router-link to="/" class="text-black dark:text-white">
        Vue Shop
      </router-link>
    </div>
    <ul class="flex">
      <li class="pl-5">
        <router-link to="/fashion" class="text-black dark:text-white">
          패션
        </router-link>
      </li>
      <li class="pl-5">
        <router-link to="/acc" class="text-black dark:text-white">
          악세서리
        </router-link>
      </li>
      <li class="pl-5">
        <router-link to="/digital" class="text-black dark:text-white">
          디지털
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default { name: "Category" };
</script>
