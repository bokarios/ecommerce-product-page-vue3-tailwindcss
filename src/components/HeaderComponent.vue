<script setup lang="ts">
import { ref } from 'vue'
import CartModalComponent from './CartModalComponent.vue'
import CartIcon from './icons/CartIcon.vue'
import { useCartStore } from '@/stores/cart'
import MenuIcon from './icons/MenuIcon.vue'
import MobileMenuComponent from './MobileMenuComponent.vue'

const showCart = ref(false)
const showMenu = ref(false)

let links = [
  {
    id: 1,
    title: 'collections',
  },
  {
    id: 2,
    title: 'men',
  },
  {
    id: 3,
    title: 'women',
  },
  {
    id: 4,
    title: 'about',
  },
  {
    id: 5,
    title: 'contact',
  },
]
</script>

<template>
  <MobileMenuComponent
    :show-menu="showMenu"
    @close-menu="() => (showMenu = false)"
  />
  <header class="px-0 lg:px-20 xl:px-36 max-w-[1440px] mx-auto">
    <div
      class="flex justify-between items-center h-16 md:h-20 lg:h-28 px-5 md:px-10 lg:px-0"
    >
      <div class="flex items-center h-full">
        <button
          class="lg:hidden pt-1 mr-4 text-gray-500"
          @click="() => (showMenu = true)"
        >
          <MenuIcon />
        </button>
        <img src="/images/logo.svg" class="mr-16" alt="logo" />
        <div class="hidden lg:flex items-center gap-10 h-full">
          <a
            v-for="link in links"
            :key="link.id"
            href="#"
            class="flex justify-center items-center font-normal capitalize text-gray-500 h-full border-b-4 border-b-transparent transition-all duration-200 ease hover:border-b-brand-orange hover:text-black"
            >{{ link.title }}</a
          >
        </div>
      </div>
      <div class="flex items-center gap-5 lg:gap-12">
        <CartModalComponent
          :show-modal="showCart"
          @close-modal="() => (showCart = false)"
        />
        <button class="relative" @click="() => (showCart = !showCart)">
          <div
            v-if="useCartStore().cart.length > 0"
            class="absolute -top-2 left-2 px-2 rounded-xl bg-brand-orange text-white text-[10px] font-bold"
          >
            {{ useCartStore().cartCount }}
          </div>
          <CartIcon class="text-gray-500 hover:text-black" />
        </button>
        <button
          class="h-7 md:h-9 lg:h-[50px] aspect-square rounded-full overflow-hidden border-2 border-transparent transition-all duration-200 ease hover:border-brand-orange"
        >
          <img
            src="/images/image-avatar.png"
            class="h-7 md:h-9 lg:h-[50px] aspect-square"
            alt="avatar"
          />
        </button>
      </div>
    </div>
    <hr class="hidden lg:block" />
  </header>
</template>
