<template>
    <div class="mentee-section">
        <h2 class="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">{{ t('mentee.title') }}</h2>
        <p class="text-sm sm:text-xl text-white/90 text-center mb-8 sm:mb-12 subtitle-glow">{{ t('mentee.description')
        }}</p>

        <AutoSlide :items="mentees" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AutoSlide from '~/components/custom ui/carousel/AutoSlide/index.vue';
import type { Item } from '~/type/info';
import { useI18n } from '#imports';

const { t } = useI18n();

const mentees = computed<Item[]>(() => [
    {
        id: parseInt(t('mentee.mentee1.id')),
        name: t('mentee.mentee1.name'),
        role: t('mentee.mentee1.role'),
        image: t('mentee.mentee1.image'),
        description: t('mentee.mentee1.description')
    },
    {
        id: parseInt(t('mentee.mentee2.id')),
        name: t('mentee.mentee2.name'),
        role: t('mentee.mentee2.role'),
        image: t('mentee.mentee2.image'),
        description: t('mentee.mentee2.description')
    },
    {
        id: parseInt(t('mentee.mentee3.id')),
        name: t('mentee.mentee3.name'),
        role: t('mentee.mentee3.role'),
        image: t('mentee.mentee3.image'),
        description: t('mentee.mentee3.description')
    },
    {
        id: parseInt(t('mentee.mentee4.id')),
        name: t('mentee.mentee4.name'),
        role: t('mentee.mentee4.role'),
        image: t('mentee.mentee4.image'),
        description: t('mentee.mentee4.description')
    },
    {
        id: parseInt(t('mentee.mentee5.id')),
        name: t('mentee.mentee5.name'),
        role: t('mentee.mentee5.role'),
        image: t('mentee.mentee5.image'),
        description: t('mentee.mentee5.description')
    },
    {
        id: parseInt(t('mentee.mentee6.id')),
        name: t('mentee.mentee6.name'),
        role: t('mentee.mentee6.role'),
        image: t('mentee.mentee6.image'),
        description: t('mentee.mentee6.description')
    },
    {
        id: parseInt(t('mentee.mentee7.id')),
        name: t('mentee.mentee7.name'),
        role: t('mentee.mentee7.role'),
        image: t('mentee.mentee7.image'),
        description: t('mentee.mentee7.description')
    },
    {
        id: parseInt(t('mentee.mentee8.id')),
        name: t('mentee.mentee8.name'),
        role: t('mentee.mentee8.role'),
        image: t('mentee.mentee8.image'),
        description: t('mentee.mentee8.description')
    },
    {
        id: parseInt(t('mentee.mentee9.id')),
        name: t('mentee.mentee9.name'),
        role: t('mentee.mentee9.role'),
        image: t('mentee.mentee9.image'),
        description: t('mentee.mentee9.description')
    },
    {
        id: parseInt(t('mentee.mentee10.id')),
        name: t('mentee.mentee10.name'),
        role: t('mentee.mentee10.role'),
        image: t('mentee.mentee10.image'),
        description: t('mentee.mentee10.description')
    },
    {
        id: parseInt(t('mentee.mentee11.id')),
        name: t('mentee.mentee11.name'),
        role: t('mentee.mentee11.role'),
        image: t('mentee.mentee11.image'),
        description: t('mentee.mentee11.description')
    },
    {
        id: parseInt(t('mentee.mentee12.id')),
        name: t('mentee.mentee12.name'),
        role: t('mentee.mentee12.role'),
        image: t('mentee.mentee12.image'),
        description: t('mentee.mentee12.description')
    },
    {
        id: parseInt(t('mentee.mentee13.id')),
        name: t('mentee.mentee13.name'),
        role: t('mentee.mentee13.role'),
        image: t('mentee.mentee13.image'),
        description: t('mentee.mentee13.description')
    },
    {
        id: parseInt(t('mentee.mentee14.id')),
        name: t('mentee.mentee14.name'),
        role: t('mentee.mentee14.role'),
        image: t('mentee.mentee14.image'),
        description: t('mentee.mentee14.description')
    },
    {
        id: parseInt(t('mentee.mentee15.id')),
        name: t('mentee.mentee15.name'),
        role: t('mentee.mentee15.role'),
        image: t('mentee.mentee15.image'),
        description: t('mentee.mentee15.description')
    }
]);
</script>

<style>
.mentee-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, #FF6B00 0%, #FFC300 100%);
    width: 100%;
    min-height: 100%;
}

.subtitle-glow {
    text-shadow: 0 0 15px rgba(255, 140, 0, 0.2);
}
</style>