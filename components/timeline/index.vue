<template>
  <section class="timeline-section">
    <h2 class="timeline-title">{{ t('timeline.title') }}</h2>
    <div class="timeline-container">
      <div class="timeline-line"></div>
      <div data-aos="fade-in" v-for="(event, index) in events" :key="index" :class="['timeline-item', index % 2 === 0 ? 'left' : 'right']">
        <div class="timeline-dot" @click="toggleCard(index)" :class="{ 'active': visibleCards[index] }">
          <Icon :name="getTimelineIcon(index)" class="timeline-icon" />
        </div>
        <div class="content" v-show="visibleCards[index]" :class="{ 'fade-enter': visibleCards[index] }">
          <span class="event-date">{{ event.date }}</span>
          <h4 class="event-title">{{ event.title }}</h4>
          <p class="event-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Events } from '~/type/info';
import { useI18n } from '#imports';
import { ref, computed } from 'vue';

const { t } = useI18n();

// Initialize all cards as visible
const visibleCards = ref(Array(15).fill(true));

const toggleCard = (index: number) => {
  visibleCards.value[index] = !visibleCards.value[index];
};

const getTimelineIcon = (index: number) => {
  const icons = [
    'ph:flame-fill',
    'ph:lightbulb-fill',
    'ph:trophy-fill',
    'ph:star-fill',
    'ph:rocket-fill',
    'ph:target-fill',
    'ph:chart-line-up-fill',
    'ph:brain-fill',
    'ph:users-fill',
    'ph:presentation-fill',
    'ph:handshake-fill',
    'ph:medal-fill',
    'ph:crown-fill',
    'ph:network-fill',
    'ph:flag-fill'
  ];
  return icons[index % icons.length];
};

// Make events reactive to locale changes
const events = computed<Events[]>(() => [
  {
    title: t('timeline.event1.title'),
    description: t('timeline.event1.description'),
    date: t('timeline.event1.date'),
    image: t('timeline.event1.image')
  },
  {
    title: t('timeline.event2.title'),
    description: t('timeline.event2.description'),
    date: t('timeline.event2.date'),
    image: t('timeline.event2.image')
  },
  {
    title: t('timeline.event3.title'),
    description: t('timeline.event3.description'),
    date: t('timeline.event3.date'),
    image: t('timeline.event3.image')
  },
  {
    title: t('timeline.event4.title'),
    description: t('timeline.event4.description'),
    date: t('timeline.event4.date'),
    image: t('timeline.event4.image')
  },
  {
    title: t('timeline.event5.title'),
    description: t('timeline.event5.description'),
    date: t('timeline.event5.date'),
    image: t('timeline.event5.image')
  },
  {
    title: t('timeline.event6.title'),
    description: t('timeline.event6.description'),
    date: t('timeline.event6.date'),
    image: t('timeline.event6.image')
  },
  {
    title: t('timeline.event7.title'),
    description: t('timeline.event7.description'),
    date: t('timeline.event7.date'),
    image: t('timeline.event7.image')
  },
  {
    title: t('timeline.event8.title'),
    description: t('timeline.event8.description'),
    date: t('timeline.event8.date'),
    image: t('timeline.event8.image')
  },
  {
    title: t('timeline.event9.title'),
    description: t('timeline.event9.description'),
    date: t('timeline.event9.date'),
    image: t('timeline.event9.image')
  },
  {
    title: t('timeline.event10.title'),
    description: t('timeline.event10.description'),
    date: t('timeline.event10.date'),
    image: t('timeline.event10.image')
  },
  {
    title: t('timeline.event11.title'),
    description: t('timeline.event11.description'),
    date: t('timeline.event11.date'),
    image: t('timeline.event11.image')
  },
  {
    title: t('timeline.event12.title'),
    description: t('timeline.event12.description'),
    date: t('timeline.event12.date'),
    image: t('timeline.event12.image')
  },
  {
    title: t('timeline.event13.title'),
    description: t('timeline.event13.description'),
    date: t('timeline.event13.date'),
    image: t('timeline.event13.image')
  },
  {
    title: t('timeline.event14.title'),
    description: t('timeline.event14.description'),
    date: t('timeline.event14.date'),
    image: t('timeline.event14.image')
  },
  {
    title: t('timeline.event15.title'),
    description: t('timeline.event15.description'),
    date: t('timeline.event15.date'),
    image: t('timeline.event15.image')
  }
]);
</script>

<style scoped>
.timeline-section {
  padding: 50px 20px;
  background: linear-gradient(135deg, #fff5e6 0%, #ffe0b2 100%);
  min-height: 100vh;
}

.timeline-title {
  text-align: center;
  color: black;
  margin-bottom: 50px;
  font-size: 2rem;
  font-weight: bold;
}

.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 500px;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(to bottom, #ff6b4a 0%, #ffd700 100%);
  transform: translateX(-50%);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 107, 74, 0.3);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}

.timeline-item.left {
  left: 0;
  text-align: right;
}

.timeline-item.right {
  left: 50%;
}

.timeline-item .content {
  position: relative;
  background: linear-gradient(135deg, #ff6b4a 0%, #ff4b2b 100%);
  color: #fff;
  border-radius: 12px;
  padding: 20px;
  animation: fadeInUp 0.6s ease both;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(255, 107, 74, 0.1);
}

.timeline-item:hover .content {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(255, 107, 74, 0.2);
  background: linear-gradient(135deg, #ff7d61 0%, #ff5c40 100%);
}

.timeline-item.left .content::after {
  content: "";
  position: absolute;
  top: 20px;
  right: -15px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent #ff4b2b;
}

.timeline-item.right .content::after {
  content: "";
  position: absolute;
  top: 20px;
  left: -15px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent #ff6b4a transparent transparent;
}

.timeline-item::before {
  display: none;
}

.event-date {
  font-size: 0.9rem;
  color: #FFC300;
  margin-bottom: 5px;
  display: block;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.event-title {
  color: #FFE0B2;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.event-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
}

.event-tag {
  display: inline-block;
  margin-top: 15px;
  padding: 5px 10px;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 15px;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.event-tag.profile {
  background-color: #f39c12;
}

.event-tag.project {
  background-color: #8e44ad;
}

.event-tag.skills {
  background-color: #27ae60;
}

.event-tag.applying {
  background-color: #2980b9;
}

.event-tag.practice {
  background-color: #d35400;
}

.event-tag.assessment {
  background-color: #506881;
}

.event-tag.interview {
  background-color: #c0392b;
}

.event-tag.networking {
  background-color: #16a085;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-dot {
  position: absolute;
  top: 30px;
  right: -12px;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #ff6b4a 0%, #ffd700 100%);
  border: 4px solid #fff;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 10px rgba(255, 107, 74, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.timeline-item.right .timeline-dot {
  left: -12px;
  right: auto;
}

.timeline-icon {
  width: 14px;
  height: 14px;
  color: #fff;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(255, 107, 74, 0.5);
}

.timeline-dot.active {
  background: linear-gradient(135deg, #ffd700 0%, #ff6b4a 100%);
  transform: scale(1.1);
}

.timeline-dot:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(255, 107, 74, 0.5);
}

.content {
  transition: all 0.3s ease;
  opacity: 1;
  transform: translateY(0);
}

.content.fade-enter {
  animation: fadeInUp 0.3s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 768px) {
  .timeline-title {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .timeline-item {
    width: 100%;
    left: 0 !important;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
  }

  .timeline-item .content {
    margin-left: 30px;
  }

  .event-date,
  .event-title,
  .event-description {
    text-align: left;
  }

  .event-date {
    font-size: 0.8rem;
  }

  .event-title {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .event-description {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .timeline-item.left .content::after,
  .timeline-item.right .content::after {
    left: -15px;
    right: auto;
    border-color: transparent var(--primary-color) transparent transparent;
  }

  .timeline-line {
    left: 20px;
  }

  .timeline-dot {
    left: 20px !important;
    right: auto;
    transform: translate(-50%, 0);
  }

  .timeline-item:hover .timeline-dot {
    transform: translate(-50%, 0) scale(1.2);
  }

  .timeline-dot.active {
    transform: translate(-50%, 0) scale(1.1);
  }
}
</style>
