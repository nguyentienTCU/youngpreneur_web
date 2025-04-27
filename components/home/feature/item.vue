<template>
  <div class="feature-card rounded-2xl relative h-full p-4 md:rounded-3xl md:p-8">
    <InspiraGlowingEffect :spread="60" :glow="true" :disabled="false" :proximity="80" :inactive-zone="0.2"
      :border-width="2" :movement-duration="1.5" />
    <div class="icon-wrapper">
      <UIcon :name="item.icon" class="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-5 icon-color" />
    </div>
    <h3 class="text-base sm:text-2xl font-medium mb-3 sm:mb-4 title-glow">
      {{ item.title }}
    </h3>
    <p class="text-sm sm:text-base description-text">
      {{ item.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { Feature } from '~/type/info';

type Props = {
  item: Feature;
};
defineProps<Props>();
</script>

<style scoped>
.feature-card {
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 107, 74, 0.1);
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 20px rgba(255, 107, 74, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-2px);
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 0 30px rgba(255, 107, 74, 0.1),
    inset 0 0 20px rgba(255, 107, 74, 0.05);
}

.icon-wrapper {
  display: inline-flex;
  padding: 12px;
  border-radius: 50%;
  background: rgba(255, 107, 74, 0.1);
  box-shadow:
    0 0 15px rgba(255, 107, 74, 0.2),
    inset 0 0 10px rgba(255, 107, 74, 0.1);
}

.icon-color {
  color: #ff6b4a;
  filter: drop-shadow(0 0 8px rgba(255, 107, 74, 0.4));
  transition: all 0.3s ease;
}

.feature-card:hover .icon-color {
  color: #e74c3c;
  transform: scale(1.1);
  filter: drop-shadow(0 0 12px rgba(231, 76, 60, 0.5));
}

.title-glow {
  background: linear-gradient(135deg, #e74c3c 0%, #ff6b4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 15px rgba(255, 107, 74, 0.3);
  letter-spacing: 0.5px;
}

.description-text {
  color: #4a4a4a;
  line-height: 1.6;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
}

.feature-card:hover .description-text {
  color: #333333;
}

@media (max-width: 640px) {
  .description-text {
    color: #4a4a4a;
    opacity: 1;
    visibility: visible;
    margin-bottom: 0.5rem;
  }
}

@media (prefers-color-scheme: dark) {
  .description-text {
    color: rgba(255, 255, 255, 0.8);
  }

  .feature-card:hover .description-text {
    color: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 640px) {
    .description-text {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
