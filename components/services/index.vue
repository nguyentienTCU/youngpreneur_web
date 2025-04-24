<template>
    <section class="hero-section services-section">
        <div class="mt-24">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl font-bold mb-6 text-white">{{ t('services.title') }}</h1>
            </div>

            <ServiceItem v-for="service in services" :key="service.id" :service="service" />

            <div class="global-action-buttons">
                <a href="https://www.facebook.com/profile.php?id=61574975645471" target="_blank" class="no-underline">
                    <UButton class="custom-action-button max-w-48">
                        {{ t('services.button2') }}
                    </UButton>
                </a>
                <NuxtLink to="/apply" class="no-underline">
                    <UButton class="custom-action-button max-w-48">
                        {{ t('services.button3') }}
                    </UButton>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServiceItem from './item.vue';
import type { Service } from '@/type/info';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
console.log(t('services.service1.details', { returnObjects: true }))

const services = ref<Service[]>([
    {
        id: t('services.service1.id'),
        title: t('services.service1.title'),
        description: t('services.service1.description'),
        start: t('services.service1.start'),
        duration: t('services.service1.duration'),
        people: t('services.service1.people'),
        fee: t('services.service1.fee'),
        details: [
            t('services.service1.detail1'),
            t('services.service1.detail2'),
            t('services.service1.detail3'),
            t('services.service1.detail4')
        ]
    },
    {
        id: t('services.service2.id'),
        title: t('services.service2.title'),
        description: t('services.service2.description'),
        start: t('services.service2.start'),
        duration: t('services.service2.duration'),
        people: t('services.service2.people'),
        fee: t('services.service2.fee'),
        details: [
            t('services.service2.detail1'),
            t('services.service2.detail2'),
            t('services.service2.detail3'),
            t('services.service2.detail4')
        ]
    },
    {
        id: t('services.service3.id'),
        title: t('services.service3.title'),
        description: t('services.service3.description'),
        start: t('services.service3.start'),
        duration: t('services.service3.duration'),
        people: t('services.service3.people'),
        fee: t('services.service3.fee'),
        details: [
            t('services.service3.detail1'),
            t('services.service3.detail2'),
            t('services.service3.detail3'),
            t('services.service3.detail4')
        ]
    },
    {
        id: t('services.service4.id'),
        title: t('services.service4.title'),
        description: t('services.service4.description'),
        start: t('services.service4.start'),
        duration: t('services.service4.duration'),
        people: t('services.service4.people'),
        fee: t('services.service4.fee'),
        details: [
            t('services.service4.detail1'),
            t('services.service4.detail2'),
            t('services.service4.detail3'),
            t('services.service4.detail4')
        ]
    }
]);
</script>

<style scoped>
.hero-section {
    @apply relative flex flex-col bg-gradient-to-r from-orange-600 to-yellow-600;
}

.services-container {
    min-height: 100vh;
    padding: 2rem 0;
}

.global-action-buttons {
    display: flex;
    gap: 1rem;
    margin: 2rem 0 2rem 0;
    padding: 2rem 0;
    justify-content: center;
}

.custom-action-button {
    @apply flex items-center justify-center;
    background-color: #1890ff;
    color: white;
    padding: 0.5rem 2rem;
    border-radius: 9999px;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 12rem;
    text-align: center;
}

.custom-action-button:hover {
    background-color: #40a9ff;
    transform: translateY(-2px);
}
</style>