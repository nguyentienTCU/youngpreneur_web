<template>
  <div>
    <!-- Home Sections -->
    <HomeHero />

    <Intro />

    <Testimonials />

    <!-- Profiles Section -->
    <ProfilesSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Blog Section -->
    <BlogSection />

    <!-- Apply Section -->
    <ApplySection />

    <FAQSection />
  </div>
</template>

<script setup lang="ts">
import HomeHero from '../components/home/index.vue';
import Intro from '../components/home/feature/index.vue';
import Testimonials from '../components/testimonials/index.vue';
import ProfilesSection from '../components/home/profiles/index.vue';
import ProjectsSection from '../components/projects/index.vue';
import BlogSection from '../components/blog/index.vue';
import ApplySection from '../components/apply/ApplySection.vue';
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
</script>
