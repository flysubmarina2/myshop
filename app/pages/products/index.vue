<template>
  <v-container class="py-6">
    <v-row align="center" class="mb-4">
      <v-col cols="12" md="6">
        <h1 class="text-h5">Каталог</h1>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field v-model="q" label="Пошук" prepend-inner-icon="mdi-magnify" hide-details />
      </v-col>
    </v-row>

    <v-row>
      <v-col
          v-for="p in filtered"
          :key="p.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
      >
        <ProductCard :product="p" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import type {ServerProduct} from "~/stores/cart";

const q = ref('')

const {data: products} = await useFetch<ServerProduct[]>('https://fakestoreapi.com/products?limit=200')

const filtered = computed(() => {
  const s = q.value.trim().toLowerCase()
  const resultProducts = products.value ? products.value : []

  if (!s) return resultProducts

  return resultProducts.filter(p => p.title.toLowerCase().includes(s))
})

</script>
