<template>
    <div class="py-16">
        <h2 class="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 section-title">{{ t('mentor.title') }}</h2>
        <p class="text-sm sm:text-xl text-center mb-8 sm:mb-12 description-text">{{ t('mentor.description') }}</p>

        <ScrollableCarousel :items="mentors" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ScrollableCarousel from '~/components/custom ui/carousel/Scrollable/index.vue';
import { useI18n } from '#imports';
import type { Item } from '~/type/info';

const { t } = useI18n();

const mentors = computed<Item[]>(() => [
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
]);
</script>

<style scoped>
.section-title {
    background: linear-gradient(135deg, #e74c3c 0%, #ff6b4a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 15px rgba(255, 107, 74, 0.2);
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    width: 40px;

    @media (min-width: 640px) {
        width: 60px;
    }

    height: 3px;
    bottom: -8px;

    @media (min-width: 640px) {
        bottom: -10px;
    }

    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #e74c3c 0%, #ff6b4a 100%);
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(255, 107, 74, 0.3);
}

.description-text {
    color: rgba(74, 74, 74, 0.9);
    text-shadow: 0 0 10px rgba(255, 107, 74, 0.1);
}

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