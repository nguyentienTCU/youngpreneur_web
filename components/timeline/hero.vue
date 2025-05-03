<template>
  <section
    class="relative min-h-[60vh] md:h-[80vh] flex items-center justify-center text-black bg-gradient-to-r from-flame to-golden px-4">
    <div class="container mx-auto px-4 text-center" data-aos="fade-left">
      <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{{ t('home.title') }}</h1>
      <p class="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">{{ t('home.description') }}</p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
        <NuxtLink to="/apply" class="no-underline w-full sm:w-auto">
          <button
            class="btn-primary w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-cream hover:text-coral transition">
            {{ t('home.apply') }}
          </button>
        </NuxtLink>
        <NuxtLink to="/" class="no-underline w-full sm:w-auto">
          <button
            class="w-full sm:w-auto border-2 border-sunset text-black-900 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-cream hover:text-coral transition">
            {{ t('home.learn') }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
</script>