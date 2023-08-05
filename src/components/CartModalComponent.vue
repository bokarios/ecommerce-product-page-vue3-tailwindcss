<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const props = defineProps(['showModal'])
</script>

<template>
  <div
    v-if="showModal"
    class="fixed top-24 right-20 w-[360px] rounded-xl shadow-2xl drop-shadow-lg bg-white z-20"
  >
    <div class="px-6 py-5">
      <h2 class="font-bold text-left">Cart</h2>
    </div>
    <hr />
    <div
      v-if="useCartStore().cart.length === 0"
      class="flex justify-center items-center h-48"
    >
      <p class="font-bold text-gray-500">Your cart is empty.</p>
    </div>
    <div v-else class="w-full p-6">
      <div class="flex justify-between items-center gap-5 w-full mb-6">
        <img
          src="/images/image-product-1-thumbnail.jpg"
          class="w-2/12 h-auto rounded-md"
          alt="thumbnail"
        />
        <div class="text-left w-8/12">
          <h3 class="text-gray-500 font-normal">
            Fall Limited Edition Sneakers
          </h3>
          <h3 class="text-gray-500 font-normal">
            $125.00 x 3 <span class="font-bold text-black">$375.00</span>
          </h3>
        </div>
        <div>
          <img src="/images/icon-delete.svg" alt="" />
        </div>
      </div>
      <button
        class="h-14 w-full text-white font-medium bg-brand-orange rounded-xl shadow transition-all duration-200 ease hover:opacity-25"
      >
        Checkout
      </button>
    </div>
  </div>
</template>
