import { defineStore } from "pinia";

export const useStore = defineStore("products", {
  state: () => ({ list: [], category: [] }),
});
