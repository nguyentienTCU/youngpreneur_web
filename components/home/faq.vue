<template>
  <div class="faq-section py-12 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <h2 class="text-center text-xl sm:text-4xl mb-6 sm:mb-16 font-semibold section-title text-black">
        {{ t("faq.title") }}
      </h2>
      <div>
        <UAccordion color="white" :items="faqList" size="xl" variant="ghost" :have-slot="false"
          :ui="{ item: { padding: '' } }">
          <template #default="{ item, open }">
            <UButton variant="ghost"
              class="bg-white border-gray hover:border-flame/30 text-gray-700 my-1.5 sm:my-2 border border-solid p-4 sm:p-6"
              :class="[
                open && 'text-flame border-flame/50 bg-white shadow-lg shadow-flame/10',
              ]">
              <div class="flex flex-col text-left items-start">
                <span class="text-sm sm:text-base font-medium" :class="[open && 'text-flame']">{{
                  item.label
                }}</span>
                <span :class="[
                  'transition-all text-sm sm:text-base text-left duration-300 ease-in-out',
                  open ? 'mt-3 sm:mt-4 max-h-40 opacity-100' : 'mt-0 max-h-0 opacity-0',
                ]" class="overflow-hidden text-gray-700">
                  {{ item.answer }}
                </span>
              </div>
            </UButton>
          </template>
        </UAccordion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const faqList = computed(() => [
  {
    id: t("faq.question1.id"),
    label: t("faq.question1.label"),
    answer: t("faq.question1.answer"),
  },
  {
    id: t("faq.question2.id"),
    label: t("faq.question2.label"),
    answer: t("faq.question2.answer"),
  },
  {
    id: t("faq.question3.id"),
    label: t("faq.question3.label"),
    answer: t("faq.question3.answer"),
  },
  {
    id: t("faq.question4.id"),
    label: t("faq.question4.label"),
    answer: t("faq.question4.answer"),
  },
  {
    id: t("faq.question5.id"),
    label: t("faq.question5.label"),
    answer: t("faq.question5.answer"),
  },
]);
</script>

<style scoped>
.faq-section {
  background: linear-gradient(135deg, #FF6B00 0%, #FFC300 100%);
}

.section-title {
  position: relative;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.section-title::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}

.text-flame {
  color: #FF6B00;
}

.border-flame\/50 {
  border-color: rgba(255, 107, 0, 0.5);
}

.border-flame\/30:hover {
  border-color: rgba(255, 107, 0, 0.3);
}

.shadow-flame\/10 {
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.1);
}
</style>
