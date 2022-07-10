import { defineStore } from "pinia";

export const useBasketState = defineStore("BasketState", {
  state: () => ({
    basket:
      (
        JSON.parse(localStorage.getItem("basket") || "{}") || {
          basket: {},
          all: 0,
        }
      ).basket || {},
    all:
      (
        JSON.parse(localStorage.getItem("basket") || "{}") || {
          basket: {},
          all: 0,
        }
      ).all || 0,
  }),
  getters: {},
  actions: {
    add(id: number) {
      this.basket[id] = (this.basket[id] || 0) + 1;
      this.all += 1;
      localStorage.setItem("basket", JSON.stringify(this));
    },
    reduce(id: number) {
      this.basket[id] > 1
        ? (this.basket[id] = this.basket[id] - 1)
        : delete this.basket[id];
      this.all > 1 ? (this.all -= 1) : (this.all = 0);
      localStorage.setItem("basket", JSON.stringify(this));
    },
    clear() {
      this.basket = {};
      this.all = 0;
    },
  },
});
