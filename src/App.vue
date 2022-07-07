<script>
import Headnav from "./components/Headnav.vue";
export default {
  components: { Headnav },
  name: "App",
  components: {
    Headnav,
  },
};
</script>
<template>
  <Headnav> </Headnav>
  <router-view></router-view>
</template>

<style>
ul,
li,
a {
  list-style: none;
  text-decoration: auto;
  padding: 0;
  margin: 0;
}
</style>
