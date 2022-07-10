import { defineStore } from "pinia";
import { useProductStore } from "./productStore";
import { basketInBasketState, basketState } from "../type/type";
export const useBasketState = defineStore("BasketState", {
  state: (): basketState => ({
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
  getters: {
    basketCount(): number {
      return this.all;
    },
    showBasket() {
      const basketList: basketInBasketState = this.basket;
      const products = useProductStore().idloader;
      const basketIdList: Array<string> = Object.keys(basketList);
      const result = Object.keys(products)
        .filter((key) => basketIdList.includes(key))
        .reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: { ...products[Number(key)], stock: basketList[Number(key)] },
          });
        }, {});
      return result;
    },
  },
  actions: {
    add(id: number) {
      this.basket[id] = (this.basket[id] || 0) + 1;
      this.all += 1;
      localStorage.setItem("basket", JSON.stringify(this));
      console.log(this.basket);
    },
    reduce(id: number) {
      this.basket[id] > 1
        ? (this.basket[id] = this.basket[id] - 1)
        : delete this.basket[id];
      this.all > 1 ? (this.all -= 1) : (this.all = 0);
      localStorage.setItem("basket", JSON.stringify(this));
      console.log(this.basket);
    },
    clear() {
      this.basket = {};
      this.all = 0;
    },
  },
});
