<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-2xl">
      <h2 class="text-4xl font-bold text-center mb-12">{{ t('apply.title') }}</h2>

      <!-- Application Form -->
      <form class="space-y-6">
        <!-- Personal Information -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">{{ t('apply.title1') }}</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label1,1') }}</label>
              <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label1,2') }}</label>
              <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label1,3') }}</label>
            <input type="email" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label1,4') }}</label>
            <input type="tel" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
        </div>

        <!-- Education & Experience -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">{{ t('apply.title2') }}</h3>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label2,1') }}</label>
            <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label2,2') }}</label>
            <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label2,3') }}</label>
            <textarea class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="4"></textarea>
          </div>
        </div>

        <!-- Interests & Goals -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">{{ t('apply.title3') }}</h3>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label3,1') }}</label>
            <div class="flex flex-wrap gap-2 mt-2">
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">{{ t('apply.label3,2') }}</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">{{ t('apply.label3,3') }}</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">{{ t('apply.label3,4') }}</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">{{ t('apply.label3,5') }}</span>
              </label>
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label3,6') }}</label>
            <textarea class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="4"></textarea>
          </div>
        </div>

        <!-- Resume Upload -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">{{ t('apply.title4') }}</h3>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('apply.label4,1') }}</label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>{{ t('apply.label4,2') }}</span>
                    <input type="file" class="sr-only">
                  </label>
                  <p class="pl-1">{{ t('apply.label4,3') }}</p>
                </div>
                <p class="text-xs text-gray-500">{{ t('apply.label4,4') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
            {{ t('apply.button') }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
