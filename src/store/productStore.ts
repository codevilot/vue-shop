import { defineStore } from "pinia";
import {
  typeProductReduceAcc,
  typeProductReduceCur,
  typeProductState,
} from "../type/type";

const fetchUrl = "https://fakestoreapi.com";
export const useProductStore = defineStore("product", {
  state: (): typeProductState => ({
    products: {},
    category: [],
    idloader: {},
  }),
  getters: {
    productList(): typeProductReduceAcc {
      return this.products;
    },

    categoryList(): Array<string> {
      return this.category;
    },
  },
  actions: {
    async fetchProduct() {
      fetch(`${fetchUrl}/products`)
        .then((response) => response.json())
        .then((responseJson) => {
          const result = responseJson.reduce(
            (acc: typeProductReduceAcc, cur: typeProductReduceCur) => {
              return {
                ...acc,
                [cur.category]: [...(acc[cur.category] || []), cur],
              };
            },
            {}
          );
          const idlist = responseJson.reduce(
            (acc: typeProductReduceAcc, cur: typeProductReduceCur) => {
              return {
                ...acc,
                [Number(cur.id)]: cur,
              };
            },
            {}
          );
          this.products = result;
          this.category = Object.keys(this.products);
          this.idloader = idlist;
        });
    },
  },
});
