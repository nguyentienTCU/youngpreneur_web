<template>
    <div class="py-16">
        <h2 class="text-3xl font-bold text-center mb-8">{{ t('mentor.title') }}</h2>
        <p class="text-xl text-gray-600 text-center mb-12">{{ t('mentor.description') }}</p>

        <ScrollableCarousel :items="mentors" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ScrollableCarousel from '~/components/custom ui/carousel/Scrollable/index.vue';
import { useI18n } from '#imports';
import type { Item } from '~/type/info';

const { t } = useI18n();


const mentors = reactive<Item[]>([
    {
        id: parseInt(t('mentor.mentor1.id')),
        name: t('mentor.mentor1.name'),
        role: t('mentor.mentor1.role'),
        image: t('mentor.mentor1.image'),
        description: t('mentor.mentor1.description')
    },
    {
        id: parseInt(t('mentor.mentor2.id')),
        name: t('mentor.mentor2.name'),
        role: t('mentor.mentor2.role'),
        image: t('mentor.mentor2.image'),
        description: t('mentor.mentor2.description')
    },
    {
        id: parseInt(t('mentor.mentor3.id')),
        name: t('mentor.mentor3.name'),
        role: t('mentor.mentor3.role'),
        image: t('mentor.mentor3.image'),
        description: t('mentor.mentor3.description')
    },
    {
        id: parseInt(t('mentor.mentor4.id')),
        name: t('mentor.mentor4.name'),
        role: t('mentor.mentor4.role'),
        image: t('mentor.mentor4.image'),
        description: t('mentor.mentor4.description')
    }
])



</script>

<style>
.carousel__slide {
    padding: 1rem;
}

.carousel__pagination {
    margin-top: 1rem;
}

.carousel__pagination-button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e2e8f0;
    margin: 0 4px;
    transition: all 0.3s;
}

.carousel__pagination-button--active {
    background-color: #3b82f6;
    transform: scale(1.2);
}

.carousel__prev,
.carousel__next {
    background-color: #3b82f6;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
}
</style>