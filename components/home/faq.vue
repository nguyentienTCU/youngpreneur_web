<template>
  <div class="py-12 sm:py-24 max-w-7xl mx-auto px-4 md:px-8">
    <h2 class="text-center text-2xl sm:text-4xl mb-8 sm:mb-16 font-semibold">
        {{ t("faq.title") }}
      </h2>
    <div>
      <UAccordion
        color="white"
        :items="faqList"
        size="xl"
        variant="ghost"
        :have-slot="false"
        :ui="{ item: { padding: '' } }"
      >
        <template #default="{ item, open }">
          <UButton
            variant="ghost"
            class="border-gray hover:border-primary-300 text-gray-700 my-2 border border-solid p-6"
            :class="[
              open && 'text-primary-600 border-primary-300 bg-primary-50',
            ]"
          >
            <div class="flex flex-col text-left items-start">
              <span class="text-sm sm:text-base font-medium">{{
                item.label
              }}</span>
              <span
                :class="[
                  'transition-all text-sm sm:text-base text-left duration-300 ease-in-out',
                  open ? 'mt-4 max-h-40 opacity-100' : 'mt-0 max-h-0 opacity-0',
                ]"
                class="overflow-hidden text-gray-700"
              >
                {{ item.answer }}
              </span>
            </div>
          </UButton>
          
        </template>
      </UAccordion>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const faqList = ref([
  {
    id: t("faq.question1.id"),
    label:
      t("faq.question1.label"),
    answer:
      t("faq.question1.answer"),
  },
  {
    id: t("faq.question2.id"),
    label:
      t("faq.question2.label"),
    answer:
      t("faq.question2.answer"),
  },
  {
    id: t("faq.question3.id"),
    label:
      t("faq.question3.label"),
    answer:
      t("faq.question3.answer"),
  },
  {
    id: t("faq.question4.id"),
    label:
      t("faq.question4.label"),
    answer:
      t("faq.question4.answer"),
  },
  {
    id: t("faq.question5.id"),
    label:
      t("faq.question5.label"),
    answer:
      t("faq.question5.answer"),
  },
]);
</script>
