<template>
    <div>
        <Carousel v-bind="config" v-model="currentSlide" :wrap-around="true">
            <Slide v-for="item in items" :key="item.id" class="p-4">
                <div
                    class="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 h-[500px] flex flex-col max-w-[360px] mx-auto">
                    <img :src="item.image" :alt="item.name" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                    <h3 class="text-xl font-semibold text-center mb-2 text-gray-800">{{ item.name }}</h3>
                    <p class="text-gray-600 text-center mb-2 text-base">{{ item.role }}</p>
                    <p class="text-gray-500 text-center mb-4 text-base">{{ item.description }}</p>
                    <!-- Additional content space -->
                    <div class="flex-1 flex flex-col justify-end">
                        <div class="text-sm text-gray-500 text-center">
                            <!-- <p class="mb-2">Experience: </p>
                            <p class="mb-2">Skills: </p>
                            <p>Availability:</p> -->
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <!-- Line indicators -->
        <div class="flex justify-center mt-6 space-x-2">
            <button v-for="(_, index) in items" :key="index" class="h-1 rounded-full transition-all"
                :class="currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300 w-4'" @click="currentSlide = index" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue'
import type { Item } from '~/type/info';

const config = {
    height: 600,
    itemsToShow: 3,
    gap: 5,
}

defineProps<{
    items: Item[];
}>();

const currentSlide = ref(0)
</script>

<style scoped>
.carousel__prev,
.carousel__next {
    background-color: #3b82f6;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
}
</style>
