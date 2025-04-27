<template>
    <div>
        <Carousel v-bind="settings" v-model="currentSlide" :wrap-around="true">
            <Slide v-for="item in items" :key="item.id" class="p-2 sm:p-4">
                <div class="mentor-card">
                    <img :src="item.image" :alt="item.name"
                        class="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover avatar">
                    <h3 class="mentor-name">{{ item.name }}</h3>
                    <p class="mentor-role">{{ item.role }}</p>
                    <p class="mentor-description">{{ item.description }}</p>
                    <!-- Additional content space -->
                    <div class="flex-1 flex flex-col justify-end">
                        <div class="text-xs sm:text-sm text-gray-500 text-center">
                            <!-- Additional info if needed -->
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <!-- Line indicators -->
        <div class="flex justify-center mt-4 sm:mt-6 space-x-2">
            <button v-for="(_, index) in items" :key="index" class="h-1 rounded-full transition-all indicator-line"
                :class="currentSlide === index ? 'active' : ''" @click="currentSlide = index" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue'
import type { Item } from '~/type/info';

const settings = {
    itemsToShow: 1,
    snapAlign: 'center' as const,
    wrapAround: true,
    breakpoints: {
        640: {
            itemsToShow: 2,
            gap: 16
        },
        1024: {
            itemsToShow: 3,
            gap: 20
        }
    }
}

defineProps<{
    items: Item[];
}>();

const currentSlide = ref(0)
</script>

<style scoped>
.mentor-card {
    background: linear-gradient(135deg, #FFF4E5 0%, #FFFFFF 100%);
    border-radius: 1rem;
    padding: 0.875rem;

    @media (min-width: 640px) {
        padding: 1.25rem;
    }

    @media (min-width: 1024px) {
        padding: 1.5rem;
    }

    box-shadow: 0 4px 20px rgba(255, 107, 74, 0.1);
    transform: translateY(0);
    transition: all 0.3s ease;
    height: 400px;

    @media (min-width: 640px) {
        height: 450px;
    }

    @media (min-width: 1024px) {
        height: 500px;
    }

    display: flex;
    flex-direction: column;
    max-width: 360px;
    margin: 0 auto;
    border: 1px solid rgba(255, 107, 74, 0.1);
}

.mentor-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 30px rgba(255, 107, 74, 0.15);
    border-color: rgba(255, 107, 74, 0.2);
}

.avatar {
    border: 3px solid rgba(255, 107, 74, 0.1);
    box-shadow: 0 4px 12px rgba(255, 107, 74, 0.1);
    transition: all 0.3s ease;
}

.mentor-card:hover .avatar {
    border-color: rgba(255, 107, 74, 0.3);
    box-shadow: 0 6px 15px rgba(255, 107, 74, 0.2);
}

.carousel__prev,
.carousel__next {
    background-color: #ff6b4a;
    border-radius: 50%;
    width: 32px;
    height: 32px;

    @media (min-width: 640px) {
        width: 40px;
        height: 40px;
    }

    color: white;
    box-shadow: 0 2px 8px rgba(255, 107, 74, 0.2);
    transition: all 0.3s ease;
}

.carousel__prev:hover,
.carousel__next:hover {
    background-color: #e74c3c;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(255, 107, 74, 0.3);
}

.indicator-line {
    height: 3px;

    @media (min-width: 640px) {
        height: 4px;
    }

    width: 20px;

    @media (min-width: 640px) {
        width: 24px;
    }

    background-color: #FFFFFF;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.indicator-line.active {
    background-color: #FF6B00;
    width: 28px;

    @media (min-width: 640px) {
        width: 32px;
    }

    border: none;
}

.mentor-name {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5rem;
    color: #000000;
    background: linear-gradient(135deg, #1a1a1a 0%, #4a3f35 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.mentor-role {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    background: linear-gradient(135deg, #e74c3c 0%, #ff6b4a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 15px rgba(255, 107, 74, 0.1);
}

.mentor-description {
    color: #4B5563;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 0.875rem;

    @media (min-width: 640px) {
        font-size: 1rem;
    }

    line-height: 1.6;
}
</style>
