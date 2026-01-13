import { defineStore } from 'pinia'

export type ServerProduct = {
  id: string
  title: string
  price: number
  description: string
  image: string
  category: string
}

export type ClientProduct = ServerProduct & {
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as ClientProduct[]
  }),
  getters: {
    totalCount: (s) => s.items.reduce((a, i) => a + i.quantity, 0),
    totalPrice: (s) => s.items.reduce((a, i) => a + i.price * i.quantity, 0)
  },
  actions: {
    add(product: ServerProduct, quantity = 1) {
      const found = this.items.find((i) => i.id === product.id)
      if (found) found.quantity += quantity
      else this.items.push({ ...product, quantity })
    },
    remove(id: string) {
      this.items = this.items.filter((i) => i.id !== id)
    },
    setQty(id: string, qty: number) {
      const found = this.items.find((i) => i.id === id)
      if (!found) return
      found.quantity = Math.max(1, qty)
    },
    clear() {
      this.items = []
    }
  }
})
