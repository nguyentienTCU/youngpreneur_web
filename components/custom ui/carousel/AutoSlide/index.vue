<template>
    <div class="embla" ref="emblaNode">
        <div class="embla__container">
            <!-- First set of items -->
            <div v-for="item in items" :key="item.id" class="embla__slide">
                <div
                    class="card bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-[500px] flex flex-col max-w-[360px] mx-auto">
                    <img :src="item.image" :alt="item.name"
                        class="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover">
                    <h3 class="text-lg sm:text-xl font-semibold text-center mb-2 name-gradient">{{ item.name }}</h3>
                    <p class="text-gray-600 text-center mb-2 text-xs sm:text-sm">{{ item.role }}</p>
                    <p class="text-gray-500 text-center mb-4 text-xs">{{ item.description }}</p>
                </div>
            </div>
            <!-- Duplicate set of items for seamless loop -->
            <div v-for="item in items" :key="`duplicate-${item.id}`" class="embla__slide">
                <div
                    class="card bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-[500px] flex flex-col max-w-[360px] mx-auto">
                    <img :src="item.image" :alt="item.name"
                        class="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover">
                    <h3 class="text-lg sm:text-xl font-semibold text-center mb-2 name-gradient">{{ item.name }}</h3>
                    <p class="text-gray-600 text-center mb-2 text-xs sm:text-sm">{{ item.role }}</p>
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
            dragFree: false,
            draggable: false,
            containScroll: 'trimSnaps',
            align: 'start',
            skipSnaps: true,
            inViewThreshold: 0.7,
            dragThreshold: 20,
            touchThreshold: 20,
            selectedClass: '',
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

        // Prevent ALL touch and mouse events
        const container = emblaNode.value.querySelector('.embla__container')
        if (container) {
            const preventAll = (e) => {
                e.preventDefault()
                e.stopPropagation()
            }

            // Mouse events
            container.addEventListener('mousedown', preventAll, { passive: false })
            container.addEventListener('mouseup', preventAll, { passive: false })
            container.addEventListener('mousemove', preventAll, { passive: false })
            container.addEventListener('click', preventAll, { passive: false })

            // Touch events
            container.addEventListener('touchstart', preventAll, { passive: false })
            container.addEventListener('touchmove', preventAll, { passive: false })
            container.addEventListener('touchend', preventAll, { passive: false })
            container.addEventListener('touchcancel', preventAll, { passive: false })

            // Pointer events
            container.addEventListener('pointerdown', preventAll, { passive: false })
            container.addEventListener('pointermove', preventAll, { passive: false })
            container.addEventListener('pointerup', preventAll, { passive: false })
            container.addEventListener('pointercancel', preventAll, { passive: false })
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
    pointer-events: none;
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
    pointer-events: none;
}

.embla__slide {
    flex: 0 0 auto;
    min-width: 0;
    padding: 0 2rem;
    position: relative;
    width: 100%;
    max-width: 360px;
    pointer-events: none;
}

.card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

.card:hover {
    border-color: rgba(255, 140, 0, 0.2);
    box-shadow: 0 15px 45px rgba(255, 140, 0, 0.15);
}

.name-gradient {
    background: linear-gradient(135deg, #1a1a1a 0%, #4a3f35 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

img {
    border: 2px solid rgba(255, 140, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover img {
    border-color: rgba(255, 140, 0, 0.3);
    transform: scale(1.05);
}
</style>