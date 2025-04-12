<template>
  <div class="pt-8">
    <!-- Profiles Content -->
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-12">Our Community</h1>

      <!-- Categories -->
      <div class="flex flex-wrap gap-4 mb-12 justify-center">
        <button class="px-4 py-2 rounded-full bg-blue-600 text-white">All Members</button>
        <button class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Mentors</button>
        <button class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Mentees</button>
        <button class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Partners</button>
      </div>

      <!-- Members Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Member Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/app.png" alt="Member" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mentor</span>
              <span class="text-gray-600 text-sm">Business Strategy</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p class="text-gray-700 mb-4">Experienced business strategist with 15+ years in corporate leadership and startup consulting.</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">LinkedIn</span>
              <button class="text-blue-600 font-semibold hover:text-blue-800">View Profile →</button>
            </div>
          </div>
        </div>

        <!-- Member Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/Thumbnail.png" alt="Member" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Mentee</span>
              <span class="text-gray-600 text-sm">Startup Founder</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Alex Chen</h3>
            <p class="text-gray-700 mb-4">Aspiring entrepreneur with a passion for sustainable technology solutions.</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">LinkedIn</span>
              <button class="text-blue-600 font-semibold hover:text-blue-800">View Profile →</button>
            </div>
          </div>
        </div>

        <!-- Member Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/app.png" alt="Member" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Partner</span>
              <span class="text-gray-600 text-sm">Venture Capital</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Michael Rodriguez</h3>
            <p class="text-gray-700 mb-4">Venture capitalist specializing in early-stage tech startups and social impact investments.</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">LinkedIn</span>
              <button class="text-blue-600 font-semibold hover:text-blue-800">View Profile →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Member -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">Featured Member</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <img src="/Thumbnail.png" alt="Featured Member" class="md:w-1/2 h-96 object-cover">
            <div class="p-8 md:w-1/2">
              <span class="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">Featured</span>
              <h3 class="text-2xl font-bold my-4">Dr. Emily Thompson</h3>
              <p class="text-gray-700 mb-6">Renowned business educator and mentor with expertise in entrepreneurship and innovation management.</p>
              <div class="flex items-center gap-4">
                <button class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">View Profile</button>
                <button class="text-blue-600 font-semibold hover:text-blue-800">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content: `Meet our community of mentors, mentees, and partners who are shaping the future of entrepreneurship.`,
    },
  ],
});
</script> 