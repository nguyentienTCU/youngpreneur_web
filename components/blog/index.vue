<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">{{ t('blog.title1') }}</h2>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button v-if="locale === 'en'" v-for="category in categories" :key="category.en" class="px-4 py-2 rounded-full"
          :class="[
            selectedCategory === category.en
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]" @click="selectedCategory = category.en">
          {{ category.en }}
        </button>

        <button v-if="locale === 'vi'" v-for="category in categories" :key="category.en" class="px-4 py-2 rounded-full"
          :class="[
            selectedCategory === category.en
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]" @click="selectedCategory = category.en">
          {{ category.vi }}
        </button>
      </div>

      <!-- First Post -->
      <div v-if="featuredPost" class="mb-16">
        <h3 class="text-2xl font-bold mb-6">{{ t('blog.title2') }}</h3>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <img :src="featuredPost.image" :alt="featuredPost.title" class="md:w-1/2 h-96 object-cover">
            <div class="p-8 md:w-1/2">
              <span class="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">Featured</span>
              <h3 class="text-2xl font-bold my-4">{{ featuredPost.title }}</h3>
              <p class="text-gray-700 mb-6">{{ featuredPost.description }}</p>
              <div class="flex items-center gap-4">
                <NuxtLink :to="`/blog/${featuredPost.id}`"
                  class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  {{ t('blog.button1') }}
                </NuxtLink>
                <span class="text-sm text-gray-600">{{ t('blog.author') }}{{ featuredPost.author }}</span>
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
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
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

const posts = reactive<BlogPost[]>([
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
    return posts;
  }
  return posts.filter(post => post.category === selectedCategory.value);
});

// Get the featured post (first post)
const featuredPost = computed(() => filteredPosts.value[0]);

// Get the next 3 posts for the grid
const recentPosts = computed(() => filteredPosts.value.slice(1, 4));


</script>