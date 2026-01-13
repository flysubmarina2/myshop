<template>
  <v-app>
    <v-app-bar
        color="primary"
        flat
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Інтернет магазин</v-toolbar-title>

      <v-spacer />

      <v-btn :to="{name: 'cart'}" icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
    >
      <v-list nav>
        <v-list-item title="Головна" to="/" />
        <v-list-item title="Каталог" to="/products" />
        <v-list-item title="Мій кошик" to="/cart" />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>
