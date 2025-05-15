<template>
  <div>
    <!-- Home Hero (Image) -->
    <HomeHero />

    <!-- Main Content with Warm Background -->
    <div class="main-content">
      <Intro />
      <Testimonials />
      <ProfilesSection />
      <ProjectsSection />
    </div>
    <FAQSection />
  </div>
</template>

<script setup lang="ts">
import HomeHero from '../components/home/banner/index.vue';
import Intro from '../components/home/feature/index.vue';
import Testimonials from '../components/testimonials/index.vue';
import ProfilesSection from '../components/home/profiles/index.vue';
import ProjectsSection from '../components/projects/index.vue';
import FAQSection from '~/components/home/faq.vue';
import { useI18n } from '#imports';

const { locale } = useI18n()

useHead({
  title: locale.value === 'en' ? `Welcome | Future Entrepreneurs Community` : `Chào mừng | Cộng đồng Doanh nhân Tương lai`,
  meta: [
    {
      name: locale.value === 'en' ? "description" : "mô tả",
      content: locale.value === 'en' ? `Join our mentorship community for young entrepreneurs. Get guidance, learn skills, and build your network with experienced mentors.` : `Tham gia cộng đồng tư vấn cho doanh nhân trẻ. Nhận hướng dẫn, học kỹ năng và xây dựng mạng lưới cộng tác với các đồng nghiệp kinh nghiệm.`,
    },
  ],
});

definePageMeta({
  layout: 'home'
})
</script>

<style scoped>
.main-content {
  background: linear-gradient(135deg, #FFF4E5 0%, #FFE0B2 100%);
  position: relative;
  overflow: hidden;
}

.main-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 74, 0.05) 0%, rgba(255, 195, 0, 0.05) 100%);
  z-index: 1;
}

.main-content>* {
  position: relative;
  z-index: 2;
}
</style>
