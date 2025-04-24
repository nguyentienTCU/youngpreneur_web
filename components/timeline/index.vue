<template>
  <section class="timeline-section">
    <h2 class="timeline-title">{{ t('timeline.title') }}</h2>
    <div class="timeline-container">
      <div v-for="(event, index) in events" :key="index" :class="['timeline-item', index % 2 === 0 ? 'left' : 'right']">
        <div class="content">
          <span class="event-date">{{ event.date }}</span>
          <h4 class="event-title">{{ event.title }}</h4>
          <p class="event-description">{{ event.description }}</p>
        </div>
      </div>
      <div class="timeline-line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Events } from '~/type/info';
import { useI18n } from '#imports';

const { t } = useI18n();

const events: Events[] = [
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
];

// Debug events data
console.log('Events data:', events);
</script>

<style scoped>
.timeline-section {
  padding: 50px 20px;
  background-color: var(--background-color);
  min-height: 100vh;
}

.timeline-title {
  text-align: center;
  color: var(--primary-color);
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
  width: 4px;
  height: 100%;
  background-color: var(--primary-color);
  transform: translateX(-50%);
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
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 8px;
  padding: 20px;
  animation: fadeInUp 0.6s ease both;
  opacity: 1;
  visibility: visible;
}

.timeline-item.left .content::after {
  content: "";
  position: absolute;
  top: 20px;
  right: -15px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent var(--primary-color);
}

.timeline-item.right .content::after {
  content: "";
  position: absolute;
  top: 20px;
  left: -15px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent var(--primary-color) transparent transparent;
}

.timeline-item::before {
  content: "";
  position: absolute;
  top: 30px;
  right: -8px;
  width: 16px;
  height: 16px;
  background-color: var(--secondary-color);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  z-index: 1;
}

.timeline-item.right::before {
  left: -8px;
}

.event-date {
  font-size: 0.9rem;
  color: #fff;
  margin-bottom: 5px;
  display: block;
}

.event-title {
  color: var(--secondary-color);
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

.event-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
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

@media screen and (max-width: 768px) {
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

  .timeline-item.left .content::after,
  .timeline-item.right .content::after {
    left: -15px;
    right: auto;
    border-color: transparent var(--primary-color) transparent transparent;
  }

  .timeline-item::before {
    left: 15px;
  }

  .timeline-line {
    left: 20px;
  }
}
</style>
