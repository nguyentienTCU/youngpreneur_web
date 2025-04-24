<template>
    <div class="embla" ref="emblaNode">
        <div class="embla__container">
            <!-- First set of items -->
            <div v-for="item in items" :key="item.id" class="embla__slide">
                <div
                    class="card bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 h-[500px] flex flex-col max-w-[360px] mx-auto">
                    <img :src="item.image" :alt="item.name" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                    <h3 class="text-xl font-semibold text-center mb-2 text-gray-800">{{ item.name }}</h3>
                    <p class="text-gray-600 text-center mb-2 text-sm">{{ item.role }}</p>
                    <p class="text-gray-500 text-center mb-4 text-xs">{{ item.description }}</p>
                </div>
            </div>
            <!-- Duplicate set of items for seamless loop -->
            <div v-for="item in items" :key="`duplicate-${item.id}`" class="embla__slide">
                <div
                    class="card bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 h-[500px] flex flex-col max-w-[360px] mx-auto">
                    <img :src="item.image" :alt="item.name" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                    <h3 class="text-xl font-semibold text-center mb-2 text-gray-800">{{ item.name }}</h3>
                    <p class="text-gray-600 text-center mb-2 text-sm">{{ item.role }}</p>
                    <p class="text-gray-500 text-center mb-4 text-xs">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import EmblaCarousel from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

defineProps({
    items: {
        type: Array,
        required: true
    }
})

const emblaNode = ref(null)
let emblaApi = null

onMounted(() => {
    if (emblaNode.value) {
        const options = {
            loop: true,
            dragFree: true,
            containScroll: 'trimSnaps',
            align: 'start',
            skipSnaps: true,
            inViewThreshold: 0.7,
            dragThreshold: 0,
            selectedClass: '',
            draggable: false,
            skipSnaps: true,
            speed: 1,
            preventInteractionOnTransition: true
        }

        const plugins = [
            AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
                stopOnFocusOut: false,
                pauseOnHover: false,
                pauseOnFocus: false,
                pauseOnInteraction: false,
                stopOnMouseLeave: false,
                stopOnLastSnap: false,
                rewind: false,
                rewindDelay: 0,
                delay: 0,
                jump: false,
                active: true,
                breakpoints: {},
                customDuration: null,
                direction: 'forward',
                force: true,
                interval: 0,
                rootNode: null,
                rootMargin: '0px',
                threshold: 0,
                visibility: true,
                startDelay: 0
            })
        ]

        emblaApi = EmblaCarousel(emblaNode.value, options, plugins)

        // Prevent default mouse behaviors
        const container = emblaNode.value.querySelector('.embla__container')
        if (container) {
            container.addEventListener('mousedown', (e) => {
                e.preventDefault()
                e.stopPropagation()
            })
            container.addEventListener('mouseup', (e) => {
                e.preventDefault()
                e.stopPropagation()
            })
            container.addEventListener('mousemove', (e) => {
                e.preventDefault()
                e.stopPropagation()
            })
        }
    }
})

onUnmounted(() => {
    if (emblaApi) emblaApi.destroy()
})
</script>

<style scoped>
.embla {
    overflow: hidden;
    width: 100%;
    position: relative;
    mask-image: linear-gradient(to right,
            transparent,
            black 20%,
            black 80%,
            transparent);
    -webkit-mask-image: linear-gradient(to right,
            transparent,
            black 20%,
            black 80%,
            transparent);
}

.embla__container {
    display: flex;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
    will-change: transform;
}

.embla__slide {
    flex: 0 0 auto;
    min-width: 0;
    padding: 0 2rem;
    position: relative;
    width: 100%;
    max-width: 360px;
}

.card {
    pointer-events: auto;
}
</style>