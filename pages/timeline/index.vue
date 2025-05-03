<template>
  <section>
      <TimelineHero />
    <!-- Timeline Content -->
    <Timeline />

    <!-- CTA Section -->
    <div class="py-20" data-aos="fade-up">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-xl md:text-3xl font-bold mb-4 md:mb-6">{{ t("timeline.joinProgramTitle") }}</h2>
        <p class="text-base md:text-xl text-gray-600 mb-6 md:mb-8">{{ t("timeline.joinProgramDescription") }}</p>
        <NuxtLink to="/apply">
          <button
            class="join-button px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition text-sm md:text-base">
            {{ t("timeline.joinProgramButton") }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.join-button {
  border: 5px solid #e74c3c;
  color: black;
  background-color: transparent;
  transition: all 0.3s ease;
}

.join-button:hover {
  cursor: pointer;
  background-color: #e74c3c;
  border: 5px solid #e74c3c;
  color: #ecf0f1;
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.2);
}

.join-button:hover::before {
  border: 0px;
}
</style>