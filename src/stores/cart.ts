import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  discount: number
  image: string
  quantity: number
}

interface CartState {
  cart: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    cart: [],
  }),
  getters: {
    cartCount() {
      let count = 0

      this.cart.forEach((item) => {
        count = count + item.quantity
      })

      return count
    },
  },
  actions: {
    addToCart(item: CartItem) {
      this.cart.push(item)
    },
    removeFromCart(item: CartItem) {
      this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id)
    },
  },
})
