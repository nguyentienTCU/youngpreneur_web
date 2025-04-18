<template>
    <section class="hero-section services-section">
        <div class="mt-24">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl font-bold mb-6 text-white">{{ t('services.title') }}</h1>
            </div>

            <ServiceItem v-for="service in services" :key="service.id" :service="service" />

            <div class="global-action-buttons">
                <a href="https://www.facebook.com/pathwise.techmentorship" target="_blank" class="no-underline">
                    <UButton class="custom-action-button max-w-48">
                        {{ t('services.button2') }}
                    </UButton>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf44FrJ2powtp9MMvGfHcz8F7irZLyfjxaCkIpr-HAr0Fl4oQ/viewform?pli=1"
                    target="_blank" class="no-underline">
                    <UButton class="custom-action-button max-w-48">
                        {{ t('services.button3') }}
                    </UButton>
                </a>
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
    }
]);
</script>

<style scoped>
.hero-section {
    @apply relative h-[120vh] flex flex-col bg-gradient-to-r from-orange-600 to-yellow-600;
}

.services-container {
    min-height: 100vh;
    padding: 2rem 0;
}

.global-action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
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