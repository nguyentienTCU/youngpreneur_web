<template>
    <section>
        <div class="container mx-auto px-4">
            <Mentor />
            <Mentee />

            <div class="text-center mt-12">
                <NuxtLink to="/profiles">
                    <button
                        class="transparent-btn px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                        {{ t('profiles') }}
                    </button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Mentor from './mentor/index.vue';
import Mentee from './mentee/index.vue';
import { useI18n } from '#imports';

const { t } = useI18n();
</script>

<style scoped>
.transparent-btn {
    background: transparent;
    color: #FF6B00;
    border: 2px solid #FF6B00;
    box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);
}

.transparent-btn:hover {
    background: rgba(255, 107, 0, 0.1);
    box-shadow: 0 6px 20px rgba(255, 107, 0, 0.3);
}
</style>