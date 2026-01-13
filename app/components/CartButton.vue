<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
</script>

<template>
  <v-btn v-if="cart.totalCount > 0" :to="{ name: 'cart' }" icon class="cart-btn">
    <v-badge :content="cart.totalCount" color="red" floating>
      <v-icon size="28">mdi-cart</v-icon>
    </v-badge>
  </v-btn>
  <v-btn v-else :to="{ name: 'cart' }" icon>
    <v-icon>mdi-cart</v-icon>
  </v-btn>
</template>
