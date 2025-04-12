<template>
    <div class="py-16">
        <h2 class="text-3xl font-bold text-center mb-8">Our Mentors</h2>
        <p class="text-xl text-gray-600 text-center mb-12">Learn from industry experts and successful entrepreneurs</p>

        <ScrollableCarousel :items="mentors" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ScrollableCarousel from '~/components/custom ui/carousel/Scrollable/index.vue';

const mentors = ref([
    {
        id: 1,
        name: 'Dr. Michael Chen',
        role: 'Tech Entrepreneur',
        image: '/app.png',
        description: 'Serial entrepreneur with 3 successful exits'
    },
    {
        id: 2,
        name: 'Lisa Rodriguez',
        role: 'Business Strategist',
        image: '/Thumbnail.png',
        description: '20+ years of experience in business development'
    },
    {
        id: 3,
        name: 'David Kim',
        role: 'Investment Expert',
        image: '/app.png',
        description: 'Venture capitalist specializing in early-stage startups'
    },
    {
        id: 4,
        name: 'Emma Wilson',
        role: 'Marketing Guru',
        image: '/Thumbnail.png',
        description: 'Digital marketing expert with global brand experience'
    }
]);
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