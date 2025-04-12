<template>
  <div class="pt-8">
    <!-- Blog Content -->
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-12">Blog</h1>

      <!-- Categories -->
      <div class="flex flex-wrap gap-4 mb-12 justify-center">
        <button 
          v-for="category in categories"
          :key="category"
          class="px-4 py-2 rounded-full"
          :class="[
            selectedCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="post in filteredPosts" 
          :key="post.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span 
                class="px-3 py-1 rounded-full text-sm"
                :class="getCategoryClass(post.category)"
              >
                {{ post.category }}
              </span>
              <span class="text-gray-600 text-sm">{{ post.date }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
            <p class="text-gray-700 mb-4">{{ post.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">By: {{ post.author }}</span>
              <button class="text-blue-600 font-semibold hover:text-blue-800">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

// Filter posts based on selected category
const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All Posts') {
    return posts.value;
  }
  return posts.value.filter(post => post.category === selectedCategory.value);
});

// Get appropriate class for category badge
const getCategoryClass = (category: string) => {
  const classes = {
    'Entrepreneurship': 'bg-blue-100 text-blue-800',
    'Business Strategy': 'bg-purple-100 text-purple-800',
    'Education': 'bg-green-100 text-green-800',
    'Sustainability': 'bg-yellow-100 text-yellow-800'
  };
  return classes[category as keyof typeof classes] || 'bg-gray-100 text-gray-800';
};

useHead({
  meta: [
    {
      name: "description",
      content: `Explore our latest insights and articles on entrepreneurship, business strategy, and innovation.`,
    },
  ],
});
</script> 