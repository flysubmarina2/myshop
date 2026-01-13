<template>
  <v-container class="py-16">

    <v-row class="mb-16">
      <v-col cols="12" md="8">
        <h1 class="hero-title">
         Інтернет магазин
        </h1>

        <div class="d-flex ga-4 mt-8">
          <v-btn size="x-large" color="primary" to="/products">
            У магазин
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            height="520"
            cover
            class="rounded-xl"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div class="section">
          <h2>Широкий асортимент</h2>
          <p>
          Вибери те що тобі пасує
          </p>
        </div>

        <div class="section">
          <h2>Унікальні товари</h2>
          <p>
            Будь першим хто придбав унікальний товар
          </p>
        </div>

        <div class="section">
          <h2>Зручність</h2>
          <p>
            Речі дуже зручні
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12" class="text-center">
        <h2 class="cta-title">
          Створи свій ідеальний гардероб
        </h2>

        <v-btn size="x-large" color="primary" class="mt-6" to="/products">
          Відкрити каталог
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.hero-sub {
  font-size: 1.1rem;
  max-width: 520px;
  color: rgba(0,0,0,0.6);
  margin-top: 24px;
}

.section {
  margin-bottom: 32px;
}

.section h2 {
  font-size: 1.4rem;
  margin-bottom: 6px;
  font-weight: 500;
}

.section p {
  color: rgba(0,0,0,0.6);
  max-width: 420px;
}

.cta-title {
  font-size: 2rem;
  font-weight: 500;
}
</style>
