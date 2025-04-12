<template>
    <div class="mentee-section">
        <h2 class="text-3xl font-bold text-center mb-8 text-white">Our Mentees</h2>
        <p class="text-xl text-white/80 text-center mb-12">Meet the talented individuals shaping our future</p>

        <AutoSlide :items="mentees" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AutoSlide from '~/components/custom ui/carousel/AutoSlide/index.vue';

const mentees = ref([
    {
        id: 1,
        name: 'A',
        role: 'Business Student',
        image: '/app.png',
        description: 'Passionate about entrepreneurship and innovation'
    },
    {
        id: 2,
        name: 'B',
        role: 'Engineering Student',
        image: '/Thumbnail.png',
        description: 'Tech enthusiast with a focus on sustainable solutions'
    },
    {
        id: 3,
        name: 'C',
        role: 'Design Student',
        image: '/app.png',
        description: 'Creative thinker with a passion for user experience'
    },
    {
        id: 4,
        name: 'D',
        role: 'Marketing Student',
        image: '/Thumbnail.png',
        description: 'Strategic marketer with a focus on digital growth'
    },
    {
        id: 5,
        name: 'E',
        role: 'Marketing Student',
        image: '/Thumbnail.png',
        description: 'Strategic marketer with a focus on digital growth'
    },
    {
        id: 6,
        name: 'F',
        role: 'Marketing Student',
        image: '/Thumbnail.png',
        description: 'Strategic marketer with a focus on digital growth'
    },
    {
        id: 7,
        name: 'G',
        role: 'Marketing Student',
        image: '/Thumbnail.png',
        description: 'Strategic marketer with a focus on digital growth'
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