<template>
    <UCard class="service-card">
        <div class="service-header">
            <UText class="block mb-2 font-bold text-2xl">{{ service.title }}</UText>
            <UText color="gray" class="block">{{ service.description }}</UText>
        </div>

        <div class="service-info">
            <div class="info-item">
                <CalendarOutlined class="icon" />
                <UText color="gray">{{ service.start }}</UText>
            </div>
            <div class="info-item">
                <ClockCircleOutlined class="icon" />
                <UText color="gray">{{ service.duration }}</UText>
            </div>
            <div class="info-item">
                <UsergroupAddOutlined class="icon" />
                <UText color="gray">{{ service.people }}</UText>
            </div>
            <div class="info-item">
                <DollarOutlined class="icon" />
                <UText color="gray">{{ service.fee }}</UText>
            </div>
        </div>

        <UButton type="primary" class="expand-button max-w-28 !text-center" @click="expanded = !expanded">
            {{ expanded ? t('services.button1,1') : t('services.button1,2') }}
        </UButton>

        <ul v-if="expanded" class="service-details mt-3 list-disc pl-6">
            <li v-for="(detail, index) in service.details" :key="index">
                <UText color="gray">{{ detail }}</UText>
            </li>
        </ul>
    </UCard>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import {
    CalendarOutlined,
    ClockCircleOutlined,
    UsergroupAddOutlined,
    DollarOutlined,
} from '@ant-design/icons-vue';

defineProps({
    service: Object,
});

const expanded = ref(false);
const { t } = useI18n();
</script>

<style scoped>
.service-card {
    margin: 0 auto 24px;
    border-radius: 12px;
    width: 50%;
    min-width: 700px;
    max-width: 800px;
}

.service-header {
    margin-bottom: 12px;
}

.service-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 16px 0;
    gap: 1rem;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.expand-button {
    margin-top: 12px;
    width: 100%;
    @apply flex items-center justify-center w-full;
    text-align: center;
}

@media screen and (max-width: 1500px) {
    .service-card {
        width: 60%;
    }
}

@media screen and (max-width: 1200px) {
    .service-card {
        width: 70%;
    }
}

@media screen and (max-width: 900px) {
    .service-card {
        width: 90%;
        min-width: unset;
    }
}

@media screen and (max-width: 600px) {
    .service-card {
        width: 95%;
    }

    .service-info {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>