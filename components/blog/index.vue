<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 section-title">{{ t('blog.title1') }}</h2>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
        <button v-if="locale === 'en'" v-for="category in categories" :key="category.en"
          class="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300" :class="[
            selectedCategory === category.en
              ? 'bg-flame text-white'
              : 'border-2 border-flame text-flame hover:bg-golden-hover'
          ]" @click="selectedCategory = category.en">
          {{ category.en }}
        </button>

        <button v-if="locale === 'vi'" v-for="category in categories" :key="category.en"
          class="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300" :class="[
            selectedCategory === category.en
              ? 'bg-flame text-white'
              : 'border-2 border-flame text-flame hover:bg-golden-hover'
          ]" @click="selectedCategory = category.en">
          {{ category.vi }}
        </button>
      </div>

      <!-- First Post -->
      <div v-if="featuredPost" class="mb-12 sm:mb-16">
        <h3 class="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">{{ t('blog.title2') }}</h3>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <img :src="featuredPost.image" :alt="featuredPost.title" class="md:w-1/2 h-64 sm:h-96 object-cover">
            <div class="p-6 sm:p-8 md:w-1/2">
              <span class="text-sm px-4 py-1 bg-flame/10 text-flame rounded-full">Featured</span>
              <h3 class="text-xl sm:text-2xl font-bold my-3 sm:my-4">{{ featuredPost.title }}</h3>
              <p class="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{{ featuredPost.description }}</p>
              <div class="flex items-center gap-4">
                <NuxtLink :to="`/blog/${featuredPost.id}`"
                  class="text-sm sm:text-base bg-flame text-white px-4 sm:px-6 py-2 rounded-md hover:bg-flame/90 transition-all duration-300">
                  {{ t('blog.button1') }}
                </NuxtLink>
                <span class="text-xs sm:text-sm text-gray-600">{{ t('blog.author') }}{{ featuredPost.author }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div v-if="recentPosts.length > 0" class="grid md:grid-cols-3 gap-8">
        <BlogItem v-for="post in recentPosts" :key="post.id" :post="post" />
      </div>

      <!-- View More Button -->
      <div class="text-right mt-8">
        <NuxtLink to="/blog"
          class="inline-block transparent-btn px-6 py-3 rounded-md transition-all duration-300 hover:scale-105">
          {{ t('blog.button2') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/type/info';
import BlogItem from './item.vue';
import { ref, computed } from 'vue';
import { useI18n } from '#imports';

const { locale, t } = useI18n();

const posts = computed<BlogPost[]>(() => [
  {
    id: t('blog.post1.id'),
    title: t('blog.post1.title'),
    description: t('blog.post1.description'),
    image: t('blog.post1.image'),
    author: t('blog.post1.author'),
    date: t('blog.post1.date'),
    category: t('blog.post1.category')
  },
  {
    id: t('blog.post2.id'),
    title: t('blog.post2.title'),
    description: t('blog.post2.description'),
    image: t('blog.post2.image'),
    author: t('blog.post2.author'),
    date: t('blog.post2.date'),
    category: t('blog.post2.category')
  },
  {
    id: t('blog.post3.id'),
    title: t('blog.post3.title'),
    description: t('blog.post3.description'),
    image: t('blog.post3.image'),
    author: t('blog.post3.author'),
    date: t('blog.post3.date'),
    category: t('blog.post3.category')
  },
  {
    id: t('blog.post4.id'),
    title: t('blog.post4.title'),
    description: t('blog.post4.description'),
    image: t('blog.post4.image'),
    author: t('blog.post4.author'),
    date: t('blog.post4.date'),
    category: t('blog.post4.category')
  }
]);

const categories = [
  { en: 'All Posts', vi: 'Tất cả bài viết' },
  { en: 'Entrepreneurship', vi: 'Kinh doanh' },
  { en: 'Business Strategy', vi: 'Chiến lược kinh doanh' },
  { en: 'Education', vi: 'Giáo dục' },
  { en: 'Sustainability', vi: 'Bền vững' }
];
const selectedCategory = ref('All Posts');

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All Posts') {
    return posts.value;
  }
  return posts.value.filter(post => post.category === selectedCategory.value);
});

// Get the featured post (first post)
const featuredPost = computed(() => filteredPosts.value[0]);

// Get the next 3 posts for the grid
const recentPosts = computed(() => filteredPosts.value.slice(1, 4));

</script>

<style scoped>
.section-title {
  background: linear-gradient(135deg, #e74c3c 0%, #ff6b4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 15px rgba(255, 107, 74, 0.2);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #e74c3c 0%, #ff6b4a 100%);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(255, 107, 74, 0.3);
}

.bg-flame {
  background-color: #FF6B00;
}

.text-flame {
  color: #FF6B00;
}

.border-flame {
  border-color: #FF6B00;
}

.bg-golden-hover {
  background-color: rgba(255, 195, 0, 0.1);
}

.transparent-btn {
  background: transparent;
  color: #FF6B00;
  border: 2px solid #FF6B00;
  box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);
}

.transparent-btn:hover {
  background: rgba(255, 107, 0, 0.1);
  box-shadow: 0 6px 20px rgba(255, 107, 0, 0.3);
}
</style>