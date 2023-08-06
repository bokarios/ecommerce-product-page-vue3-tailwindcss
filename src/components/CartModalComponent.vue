<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const props = defineProps(['showModal'])
defineEmits(['closeModal'])
</script>

<template>
  <div
    v-if="showModal"
    class="fixed top-0 left-0 w-full h-screen flex justify-center md:justify-end pt-20 md:pt-24 px-4 md:px-0 z-40"
    @click.self="$emit('closeModal')"
  >
    <div
      class="w-full md:w-[360px] rounded-xl shadow-2xl drop-shadow-lg bg-white h-fit md:mr-5 xl:mr-10"
    >
      <div class="px-6 py-5">
        <h2 class="font-bold text-left">Cart</h2>
      </div>
      <hr />
      <div
        v-if="useCartStore().cart.length === 0"
        class="flex justify-center items-center h-52"
      >
        <p class="font-bold text-gray-500">Your cart is empty.</p>
      </div>
      <div v-else class="w-full p-6">
        <div
          class="flex justify-between items-center gap-4 md:gap-5 w-full mb-6"
        >
          <img
            src="/images/image-product-1-thumbnail.jpg"
            class="w-2/12 h-auto rounded-md"
            alt="thumbnail"
          />
          <div class="text-left w-9/12">
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
  </div>
</template>
