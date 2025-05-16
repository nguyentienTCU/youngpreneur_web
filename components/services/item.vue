<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden w-full md:min-h-64">
        <div class="p-4 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold mb-2">{{ service.title }}</h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4">{{ service.description }}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4 w-full">
                <div class="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                    <CalendarOutlined class="icon" />
                    <span>{{ service.start }}</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                    <ClockCircleOutlined class="icon" />
                    <span>{{ service.duration }}</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                    <UsergroupAddOutlined class="icon" />
                    <span>{{ service.people }}</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                    <DollarOutlined class="icon" />
                    <span>{{ service.fee }}</span>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div></div>
                <UButton type="primary" class="expand-button max-w-28" @click="expanded = !expanded">
                    {{ expanded ? t('services.button1,1') : t('services.button1,2') }}
                </UButton>
            </div>
            <ul v-if="expanded" class="mt-3 list-disc pl-6">
                <li v-for="(detail, index) in service.details" :key="index" class="text-gray-600 text-sm sm:text-base">
                    {{ detail }}
                </li>
            </ul>
        </div>
    </div>
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
.text-flame {
    color: #FF3C38;
}

.icon {
    font-size: 1rem;
}

.expand-button {
    background-color: #FF3C38;
    margin-top: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 9999px;
    color: #fff;
    border: 2px solid #FF3C38;
    transition: all 0.3s ease;
}

.expand-button:hover {
    background-color: #FF8360;
    color: #fff;
}
</style>