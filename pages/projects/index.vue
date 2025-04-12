<template>
  <div class="pt-8">
    <!-- Projects Content -->
    <div class="container mx-auto px-4 py-16">
      <!-- <h1 class="text-4xl font-bold text-center mb-12"></h1> -->
      <h1 class="text-4xl font-bold text-center mb-12">Project Showcase</h1>

      <!-- Categories -->
      <div class="flex flex-wrap gap-4 mb-12 justify-center">
        <button class="px-4 py-2 rounded-full bg-blue-600 text-white">All Projects</button>
        <button class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Business Cases</button>
        <button class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Startup Pitches</button>
        <button class="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Hackathons</button>
      </div>

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/app.png" alt="Project" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Business Case</span>
              <span class="text-gray-600 text-sm">2024</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Eco-Friendly Packaging Solution</h3>
            <p class="text-gray-700 mb-4">A sustainable packaging solution that reduces waste and costs for e-commerce businesses.</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">By: Team Green Innovators</span>
              <button class="text-blue-600 font-semibold hover:text-blue-800">View Project →</button>
            </div>
          </div>
        </div>

        <!-- Project Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/Thumbnail.png" alt="Project" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Startup Pitch</span>
              <span class="text-gray-600 text-sm">2024</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">AI-Powered Learning Platform</h3>
            <p class="text-gray-700 mb-4">Personalized learning experience using artificial intelligence to adapt to student needs.</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">By: TechEd Solutions</span>
              <button class="text-blue-600 font-semibold hover:text-blue-800">View Project →</button>
            </div>
          </div>
        </div>

        <!-- Project Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/app.png" alt="Project" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Hackathon</span>
              <span class="text-gray-600 text-sm">2024</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Community Health App</h3>
            <p class="text-gray-700 mb-4">Mobile application connecting local healthcare providers with patients in underserved areas.</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">By: HealthTech Team</span>
              <button class="text-blue-600 font-semibold hover:text-blue-800">View Project →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Project -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">Featured Project</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <img src="/Thumbnail.png" alt="Featured Project" class="md:w-1/2 h-96 object-cover">
            <div class="p-8 md:w-1/2">
              <span class="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">Featured</span>
              <h3 class="text-2xl font-bold my-4">Smart City Solutions</h3>
              <p class="text-gray-700 mb-6">An innovative platform that uses IoT and AI to optimize city resources and improve urban living conditions.</p>
              <div class="flex items-center gap-4">
                <button class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">View Project</button>
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
      content: `Explore innovative projects and ideas from our community of young entrepreneurs.`,
    },
  ],
});
</script> 