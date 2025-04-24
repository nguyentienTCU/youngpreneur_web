<template>
  <div>
    <TimelineHero />
    <!-- Timeline Content -->
    <Timeline />

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">{{ t("timeline.joinProgramTitle") }}</h2>
        <p class="text-xl text-gray-600 mb-8">{{ t("timeline.joinProgramDescription") }}</p>
        <NuxtLink to="/apply">
          <button class="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            {{ t("timeline.joinProgramButton") }}
          </button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>