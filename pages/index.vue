<template>
  <div>
    <!-- Home Sections -->
    <HomeHero />

    <Intro />

    <Testimonials />

    <!-- Profiles Section -->
    <ProfilesSection />

    <TimeLine />

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
import TimeLine from '../components/timeline/index.vue';
import ProfilesSection from '../components/home/profiles/index.vue';
import ProjectsSection from '../components/projects/index.vue';
import BlogSection from '../components/blog/index.vue';
import ApplySection from '../components/apply/ApplySection.vue';
import FAQSection from '~/components/home/faq.vue';

useHead({
  title: `Welcome | Future Entrepreneurs Community`,
  meta: [
    {
      name: "description",
      content: `Join our mentorship community for young entrepreneurs. Get guidance, learn skills, and build your network with experienced mentors.`,
    },
  ],
});
</script>
