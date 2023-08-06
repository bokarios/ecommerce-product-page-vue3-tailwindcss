<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'

defineProps(['showMenu'])
defineEmits(['closeMenu'])

let links = ['collections', 'men', 'women', 'about', 'contact']
</script>

<template>
  <div
    :class="`fixed top-0 left-0 w-full h-full lg:hidden z-50 bg-[#000000bf] overflow-hidden transition-all duration-500 ease-in-out ${
      showMenu ? 'visible' : 'invisible'
    }`"
  >
    <div
      :class="`w-[250px] h-screen bg-white p-6 transition-all duration-500 ease-in-out ${
        showMenu ? 'ml-0' : 'ml-[-250px]'
      } `"
    >
      <button class="text-gray-600 mb-14" @click="$emit('closeMenu')">
        <CloseIcon />
      </button>
      <div class="flex flex-col w-full gap-6">
        <a
          v-for="link in links"
          :key="link"
          href="#"
          class="text-lg text-brand-black font-bold capitalize hover:text-gray-800"
          @click="$emit('closeMenu')"
          >{{ link }}</a
        >
      </div>
    </div>
  </div>
</template>
