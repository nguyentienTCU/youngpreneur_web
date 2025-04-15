<template>
    <div class="mentee-section">
        <h2 class="text-3xl font-bold text-center mb-8 text-white">{{ t('mentee.title') }}</h2>
        <p class="text-xl text-white/80 text-center mb-12">{{ t('mentee.description') }}</p>

        <AutoSlide :items="mentees" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import AutoSlide from '~/components/custom ui/carousel/AutoSlide/index.vue';
import type { Item } from '~/type/info';
import { useI18n } from '#imports';

const { t } = useI18n();


const mentees = reactive<Item[]>([
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
    }
]);
</script>

<style>
.mentee-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    width: 100%;
    min-height: 100%;
}
</style>