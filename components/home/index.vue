<template>
  <section
    class="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-6">{{ t('home.title') }}</h1>
      <p class="text-xl mb-8">{{ t('home.description') }}</p>
      <div class="space-x-4">
        <NuxtLink to="/apply" class="no-underline">
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            {{ t('home.apply') }}
          </button>
        </NuxtLink>
        <NuxtLink to="/timeline" class="no-underline">
          <button
            class="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
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
