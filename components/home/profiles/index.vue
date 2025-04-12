<template>
    <section>
        <div class="container mx-auto px-4">
            <Mentor />
            <Mentee />

            <div class="text-center mt-12">
                <NuxtLink to="/profiles">
                    <button
                        class="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                        View All Members
                    </button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Mentor from './mentor/index.vue';
import Mentee from './mentee/index.vue';
</script>