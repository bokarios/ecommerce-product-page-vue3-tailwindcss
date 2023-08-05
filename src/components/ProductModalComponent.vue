<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import NextIcon from './icons/NextIcon.vue'
import PreviousIcon from './icons/PreviousIcon.vue'

const props = defineProps(['activeImage', 'images', 'showModal'])
const emit = defineEmits(['changeActiveImage', 'closeModal'])

const nextImage = () => {
  let current = props.activeImage

  if (current == props.images.length - 1) {
    emit('changeActiveImage', 0)
  } else {
    emit('changeActiveImage', current + 1)
  }
}

const previousImage = () => {
  let current = props.activeImage

  if (current == 0) {
    emit('changeActiveImage', props.images.length - 1)
  } else {
    emit('changeActiveImage', current - 1)
  }
}
</script>

<template>
  <div
    v-if="showModal"
    class="flex justify-center items-center w-full h-screen fixed top-0 left-0 z-30 bg-[#000000bf]"
    @click.self="$emit('closeModal')"
  >
    <div class="w-[535px]">
      <div class="relative w-full rounded-2xl mb-8">
        <button
          class="flex justify-center items-center rounded-full absolute right-0 -top-12 z-40 text-white hover:text-brand-orange"
          @click="$emit('closeModal')"
        >
          <CloseIcon class="scale-150" />
        </button>
        <button
          class="flex justify-center items-center w-16 h-16 rounded-full bg-white text-black hover:text-brand-orange absolute -right-8 top-[45%] z-40"
          @click="nextImage"
        >
          <NextIcon />
        </button>
        <button
          class="flex justify-center items-center w-16 h-16 rounded-full bg-white text-black hover:text-brand-orange absolute -left-8 top-[45%] z-40"
          @click="previousImage"
        >
          <PreviousIcon />
        </button>
        <img
          :src="`/images/${images[activeImage].image}`"
          class="w-full h-auto rounded-2xl"
          alt="product"
        />
      </div>
      <div class="grid grid-cols-4 gap-8 w-full px-12">
        <button
          v-for="image in images"
          :key="image.id"
          :class="`rounded-xl ${
            image.id - 1 == activeImage && 'border-2 border-brand-orange'
          }`"
          @click="$emit('changeActiveImage', image.id - 1)"
        >
          <img
            :src="`/images/${image.thumbnail}`"
            :class="`h-auto rounded-xl ${
              image.id - 1 == activeImage && 'contrast-[15%]'
            } hover:contrast-[15%]`"
            :alt="image.thumbnail"
          />
        </button>
      </div>
    </div>
  </div>
</template>
