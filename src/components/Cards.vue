<template>
  <div v-for="item in keys" :key="item">
    <Card :items="products[item]" :category="item" />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Cards",
  data() {
    return {
      products: [],
      keys: [],
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const result = json.reduce((acc, cur) => {
          if (acc.hasOwnProperty(cur.category)) {
            return { ...acc, [cur.category]: [...acc[cur.category], cur] };
          } else {
            return { ...acc, [cur.category]: [cur] };
          }
        }, {});
        this.products = result;
        this.keys = Object.keys(this.products);
      });
  },
  method: {},
  components: {
    Card,
  },
};
</script>
