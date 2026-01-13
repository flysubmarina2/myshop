<template>
  <v-card :elevation="6" class="product-card h-100" rounded="lg">
    <v-img :src="product.image" height="180" cover />
    <v-card-title class="text-wrap">{{ product.title }}</v-card-title>

    <v-card-subtitle> {{ product.price }} zł </v-card-subtitle>

    <v-spacer />

    <v-card-actions>
      <v-btn :to="`/products/${product.id}`" variant="tonal"> Докладніше </v-btn>

      <v-spacer />

      <v-btn color="primary" @click="addToCart"> У кошик </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { type ServerProduct, useCartStore } from '~/stores/cart'

const props = defineProps<{
  product: ServerProduct
}>()

const cart = useCartStore()

function addToCart() {
  cart.add(props.product, 1)
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
}
</style>
