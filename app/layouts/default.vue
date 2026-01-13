<template>
  <NavBar @on-drawer-toggle="drawer = !drawer" />
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav>
      <v-list-item title="Головна" to="/" />
      <v-list-item title="Каталог" to="/products" />
      <v-list-item title="Мій кошик" to="/cart" />
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <slot />
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>
