<script setup lang="ts">
import CartIcon from '@/components/icons/CartIcon.vue'
import { ref } from 'vue'
import ProductModalComponent from './ProductModalComponent.vue'
import MinusIcon from './icons/MinusIcon.vue'
import PlusIcon from './icons/PlusIcon.vue'
import { useCartStore } from '@/stores/cart'
import NextIcon from './icons/NextIcon.vue'
import PreviousIcon from './icons/PreviousIcon.vue'

const activeImage = ref(0)
const quantity = ref(1)

const images = ref([
  {
    id: 1,
    image: 'image-product-1.jpg',
    thumbnail: 'image-product-1-thumbnail.jpg',
  },
  {
    id: 2,
    image: 'image-product-2.jpg',
    thumbnail: 'image-product-2-thumbnail.jpg',
  },
  {
    id: 3,
    image: 'image-product-3.jpg',
    thumbnail: 'image-product-3-thumbnail.jpg',
  },
  {
    id: 4,
    image: 'image-product-4.jpg',
    thumbnail: 'image-product-4-thumbnail.jpg',
  },
])

const showModal = ref(false)

const changeActiveImage = (imageId: number) => {
  activeImage.value = imageId
}

const toggleModal = (state: boolean) => (showModal.value = state)

const changeQuantity = (operation: string) => {
  if (operation == 'add') {
    quantity.value = quantity.value + 1
  }

  if (operation == 'sub') {
    if (quantity.value > 1) {
      quantity.value = quantity.value - 1
    }
  }
}

const addProduct = () => {
  const product = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    price: 250,
    discount: 50,
    image: 'image-product-1-thumbnail.jpg',
    quantity: quantity.value,
  }

  useCartStore().addToCart(product)
}

const nextImage = () => {
  let current = activeImage.value

  if (current == images.value.length - 1) {
    changeActiveImage(0)
  } else {
    changeActiveImage(current + 1)
  }
}

const previousImage = () => {
  let current = activeImage.value

  if (current == 0) {
    changeActiveImage(images.value.length - 1)
  } else {
    changeActiveImage(current - 1)
  }
}
</script>

<template>
  <ProductModalComponent
    :active-image="activeImage"
    :images="images"
    :show-modal="showModal"
    @change-active-image="changeActiveImage"
    @close-modal="toggleModal(false)"
  />
  <section
    class="px-0 lg:px-28 xl:px-52 lg:py-20 xl:py-24 max-w-[1440px] mx-auto"
  >
    <div
      class="flex flex-col lg:flex-row lg:justify-evenly xl:items-center lg:gap-10 xl:gap-28"
    >
      <div class="w-full overflow-hidden relative">
        <div class="w-full lg:mb-8 relative">
          <div class="absolute top-0 left-0 w-full h-full z-10 lg:hidden"></div>
          <button
            class="absolute top-[45%] right-4 flex justify-center items-center w-10 h-10 md:w-14 md:h-14 bg-white rounded-full z-20 lg:hidden hover:text-brand-orange"
            @click="nextImage"
          >
            <NextIcon />
          </button>
          <button
            class="absolute top-[45%] left-4 flex justify-center items-center w-10 h-10 md:w-14 md:h-14 bg-white rounded-full z-20 lg:hidden hover:text-brand-orange"
            @click="previousImage"
          >
            <PreviousIcon />
          </button>
          <button
            class="lg:rounded-2xl overflow-hidden"
            @click="toggleModal(true)"
          >
            <img
              :src="`/images/${images[activeImage].image}`"
              class="w-full h-auto"
              alt="product"
            />
          </button>
        </div>
        <div class="hidden lg:grid grid-cols-4 gap-8 w-full">
          <button
            v-for="image in images"
            :key="image.id"
            :class="`rounded-xl ${
              image.id - 1 == activeImage && 'border-2 border-brand-orange'
            }`"
            @click="changeActiveImage(image.id - 1)"
          >
            <img
              :src="`/images/${image.thumbnail}`"
              :class="`h-auto rounded-xl ${
                image.id - 1 == activeImage && 'opacity-25'
              } hover:opacity-25 active:opacity-25`"
              :alt="image.thumbnail"
            />
          </button>
        </div>
      </div>
      <div class="w-full px-5 md:px-10 pt-4 pb-20">
        <h4
          class="font-bold text-brand-orange text-sm lg:text-[16px] uppercase mb-2 md:mb-4"
        >
          sneaker company
        </h4>
        <h2
          class="capitalize text-brand-black text-3xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-8"
        >
          fall limited edition sneakers
        </h2>
        <p class="text-gray-500 font-normal mb-4 md:mb-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div
          class="flex lg:flex-col justify-between items-center lg:items-start mb-8"
        >
          <div class="flex items-center gap-5">
            <h3 class="text-3xl text-brand-black font-bold">$125.00</h3>
            <div
              class="text-brand-orange font-bold bg-brand-pale-orange rounded-lg py-0.5 px-3"
            >
              50%
            </div>
          </div>
          <h4 class="text-gray-400 font-bold line-through">$250.00</h4>
        </div>
        <div class="flex flex-col md:flex-row md:items-center gap-4 w-full">
          <div
            class="h-14 bg-brand-light-grayish-blue rounded-xl flex justify-evenly items-center w-full md:w-7/12 shadow-sm"
          >
            <button
              class="flex justify-center items-center w-full h-full hover:opacity-25"
              @click="changeQuantity('sub')"
            >
              <MinusIcon class="text-brand-orange" />
            </button>
            <h4
              class="text-brand-black font-bold flex justify-center items-center w-full h-full"
            >
              {{ quantity }}
            </h4>
            <button
              class="flex justify-center items-center w-full h-full hover:opacity-25"
              @click="changeQuantity('add')"
            >
              <PlusIcon class="text-brand-orange" />
            </button>
          </div>
          <button
            class="h-14 w-full bg-brand-orange rounded-xl shadow transition-all duration-200 ease hover:opacity-25"
            @click="addProduct"
          >
            <div class="flex items-center justify-center gap-4">
              <CartIcon class="text-brand-white scale-90" />
              <h3 class="text-brand-white font-bold">Add to cart</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
