<template>
  <div class="px-4">
    <h2
      class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold dark:text-white pt-10 text-black"
    >
      {{ category }}
    </h2>
    <div
      class="grid gap-6 md:w-full w-screen md:grid-flow-row md:grid-cols-2 md:auto-rows-auto lg:grid-cols-4 auto-cols-[minmax(320px,1fr)] grid-flow-col overflow-x-auto"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-gray-100 dark:bg-gray-600 dark:border-0 border-2 dark:border-gray-200 rounded-lg font-bold"
      >
        <router-link :to="'/product/' + item.id">
          <div
            class="flex h-80 bg-white overflow-hidden justify-center items-center flex rounded-t-lg"
          >
            <img :src="item.image" class="max-w-[50%] max-h-[50%]" />
          </div>
          <div class="text-black dark:text-white p-10">
            <div>{{ item.title }}</div>
            <div>{{ item.price }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    items: {
      id: Number,
      title: String,
      description: String,
      category: String,
      image: String,
    },
    category: String,
  },
};
</script>
