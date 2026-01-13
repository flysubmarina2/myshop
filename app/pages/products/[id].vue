<template>
  <v-container class="py-8">
    <v-breadcrumbs :items="breadcrumbs" class="mb-4" />

    <v-progress-linear v-if="pending" indeterminate class="mb-6" />

    <v-alert v-else-if="error" type="error" variant="tonal" class="mb-6">
      {{ error.message }}
    </v-alert>

    <v-alert v-else-if="!product" type="warning" variant="tonal" class="mb-6">
      Товар не найден
    </v-alert>

    <template v-else>
      <v-row>
        <v-col cols="12" md="6">
          <v-card rounded="xl" elevation="0" border class="overflow-hidden">
            <v-img :src="product.image" height="520" cover />
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <h1 class="text-h4 font-weight-bold mb-3">
            {{ product.title }}
          </h1>

          <div class="text-h5 mb-6">{{ product.price }} zł</div>

          <div class="d-flex ga-3 flex-wrap mb-6">
            <v-btn color="primary" size="x-large" @click="addToCart"> У кошик</v-btn>
          </div>

          <v-divider class="my-8" />

          <div class="text-subtitle-1 font-weight-medium mb-2">Опис</div>
          <div class="text-body-1 text-medium-emphasis" style="white-space: pre-line">
            {{ product.description }}
          </div>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { type ServerProduct, useCartStore } from '~/stores/cart'

const route = useRoute()
const id = String(route.params.id)

const { data, pending, error } = await useFetch<ServerProduct>(
  `https://fakestoreapi.com/products/${id}`
)

const product = computed(() => data.value ?? null)

const breadcrumbs = computed(() => [
  { title: 'Головна', to: '/' },
  { title: 'Каталог', to: '/products' },
  { title: product.value?.title ?? 'Товар', disabled: true }
])

function addToCart() {
  if (!product.value) return
  const cart = useCartStore()
  cart.add(product.value, 1)

  console.log('add to cart', product.value.id)
}
</script>
