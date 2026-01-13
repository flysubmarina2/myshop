<script setup lang="ts">
const emit = defineEmits(['on-drawer-toggle'])
const onDrawerToggle = (): void => {
  emit('on-drawer-toggle')
}
</script>

<template>
  <v-app-bar color="primary" flat>
    <v-app-bar-nav-icon @click="onDrawerToggle"></v-app-bar-nav-icon>

    <v-toolbar-title>Інтернет магазин</v-toolbar-title>

    <v-spacer />
    <div class="mr-4 mt-2 mb-2">
      <CartButton />
    </div>
  </v-app-bar>
</template>

<style scoped></style>
