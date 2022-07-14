<template>
  <div v-if="basketCount === 0">
    <div class="text-white text-3xl pt-5">장바구니에 물품이 없습니다.</div>
    <div class="flex pt-10 text-white">
      <router-link to="/">
        <div
          class="bg-indigo-800 p-5 border-indigo-800 border-2 rounded-lg mr-5 text-white"
        >
          담으러 가기
        </div>
      </router-link>
    </div>
    <div class="flex pt-10 text-white place-content-end"></div>
  </div>
  <div v-else>
    <div v-for="element in showBasket" :key="element.id">
      <Payment
        :price="element.price"
        :id="element.id"
        :stock="element.stock"
        :title="element.title"
        :image="element.image"
      />
    </div>
    <div class="flex place-content-end pb-10">
      <div class="self-center w-fit rounded-lg mr-5 dark:text-white text:black text-xl">
       총 ${{
          Object.entries(showBasket).reduce(
            (acc, [key, value]) =>
              acc + Number(value.price) * Number(value.stock),
            0
          )
        }}
      </div>
      <label
        htmlFor="my-modal"
        class="bg-indigo-600 p-4 rounded-lg text-white"
      >
        구매하기
      </label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div
          class="modal-box dark:bg-black bg-white dark:text-white text-black"
        >
          <h3 class="font-bold text-lg">정말로 구매하시겠습니까?</h3>
          <p class="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          <div class="modal-action">
            <label
              @click="clearBasket"
              htmlFor="my-modal"
              class="bg-indigo-600 p-4 rounded-lg text-white"
            >
              네
            </label>
            <label
              htmlFor="my-modal"
              class="dark:text-white border-2 border-indigo-600 p-4 rounded-lg"
            >
              아니오
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import Payment from "../components/Payment.vue";
import { useBasketState } from "../store/basketStore";
export default {
  name: "Cart",
  setup() {
    const basketState = useBasketState();
    return {
      basketCount: computed(() => basketState.basketCount),
      showBasket: computed(() => basketState.showBasket),
      clearBasket: computed(() => basketState.clear),
    };
  },
  components: {
    Payment,
  },
};
</script>
