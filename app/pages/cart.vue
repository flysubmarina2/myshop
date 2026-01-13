<template>
  <v-container class="py-6">
    <v-row class="mb-4" align="center">
      <v-col><h1 class="text-h5">Кошик</h1></v-col>
      <v-col class="text-end">
        <v-btn to="/checkout" color="primary" :disabled="cart.items.length === 0">
          Замовити ({{ cart.totalPrice }} $)
        </v-btn>
      </v-col>
    </v-row>

    <v-alert v-if="cart.items.length === 0" type="info" variant="tonal">
      Кошик пустий
    </v-alert>

    <v-card v-for="i in cart.items" :key="i.id" class="mb-3" rounded="lg">
      <v-card-text class="d-flex align-center ga-4">
        <v-avatar size="64" rounded="lg">
          <v-img :src="i.image" cover />
        </v-avatar>

        <div class="flex-grow-1">
          <div class="text-subtitle-1">{{ i.title }}</div>
          <div class="text-medium-emphasis">{{ i.price }} zł</div>
        </div>

        <v-text-field
            type="number"
            min="1"
            style="max-width: 110px"
            hide-details
            v-model.number="qty[i.id]"
            @update:model-value="cart.setQty(i.id, qty[i.id])"
        />

        <div style="width: 120px" class="text-end">
          {{ i.price * i.quantity }} zł
        </div>

        <v-btn icon variant="text" @click="cart.remove(i.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
const cart = useCartStore()

const qty = reactive<Record<string, number>>({})

watchEffect(() => {
  cart.items.forEach(i => (qty[i.id] = i.quantity))
})
</script>
