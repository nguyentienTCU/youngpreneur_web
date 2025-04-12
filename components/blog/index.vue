<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Latest Insights</h2>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories"
          :key="category"
          class="px-4 py-2 rounded-full"
          :class="[
            selectedCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- First Post -->
      <div v-if="featuredPost" class="mb-16">
        <h3 class="text-2xl font-bold mb-6">All Posts</h3>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <img :src="featuredPost.image" :alt="featuredPost.title" class="md:w-1/2 h-96 object-cover">
            <div class="p-8 md:w-1/2">
              <span class="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">Featured</span>
              <h3 class="text-2xl font-bold my-4">{{ featuredPost.title }}</h3>
              <p class="text-gray-700 mb-6">{{ featuredPost.description }}</p>
              <div class="flex items-center gap-4">
                <NuxtLink :to="`/blog/${featuredPost.id}`" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Read More
                </NuxtLink>
                <span class="text-sm text-gray-600">By: {{ featuredPost.author }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <BlogItem
          v-for="post in recentPosts"
          :key="post.id"
          :post="post"
        />
      </div>

      <!-- View More Button -->
      <div class="text-right mt-8">
        <NuxtLink to="/blog" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View All Posts →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogItem from './item.vue';
import { ref, computed } from 'vue';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const posts = ref<BlogPost[]>([
  {
    id: '1',
    title: 'The Future of Entrepreneurship',
    description: 'Exploring emerging trends and opportunities in the entrepreneurial landscape.',
    image: '/app.png',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Entrepreneurship'
  },
  {
    id: '2',
    title: 'Digital Transformation Strategies',
    description: 'Key strategies for businesses to adapt and thrive in the digital age.',
    image: '/Thumbnail.png',
    author: 'Michael Chen',
    date: 'March 10, 2024',
    category: 'Business Strategy'
  },
  {
    id: '3',
    title: 'Innovation in Education',
    description: 'How technology is reshaping the future of learning and development.',
    image: '/app.png',
    author: 'Emily Davis',
    date: 'March 5, 2024',
    category: 'Education'
  },
  {
    id: '4',
    title: 'Sustainable Business Practices',
    description: 'Implementing eco-friendly solutions in modern business operations.',
    image: '/Thumbnail.png',
    author: 'David Wilson',
    date: 'February 28, 2024',
    category: 'Sustainability'
  }
]);

const categories = ['All Posts', 'Entrepreneurship', 'Business Strategy', 'Education', 'Sustainability'];
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