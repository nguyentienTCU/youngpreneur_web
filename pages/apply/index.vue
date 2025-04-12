<template>
  <div class="min-h-screen py-12 pt-40">
    <div class="container mx-auto px-4 max-w-2xl">
      <h1 class="text-4xl font-bold text-center mb-12">Join Our Community</h1>

      <!-- Progress Bar -->
      <div class="mb-8">
        <div class="flex justify-between mb-2">
          <span class="text-sm font-medium text-blue-600">Step 1 of 3</span>
          <span class="text-sm font-medium text-gray-600">Personal Information</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: 33%"></div>
        </div>
      </div>

      <!-- Application Form -->
      <form class="space-y-6">
        <!-- Personal Information -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Personal Information</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
        </div>

        <!-- Education & Experience -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Education & Experience</h2>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Current School/University</label>
            <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Major/Field of Study</label>
            <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Previous Experience</label>
            <textarea class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" rows="4"></textarea>
          </div>
        </div>

        <!-- Interests & Goals -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Interests & Goals</h2>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
            <div class="flex flex-wrap gap-2 mt-2">
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">Technology</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">Marketing</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">Finance</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600">
                <span class="ml-2">Social Impact</span>
              </label>
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Career Goals</label>
            <textarea class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" rows="4"></textarea>
          </div>
        </div>

        <!-- Resume Upload -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Resume Upload</h2>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input type="file" class="sr-only">
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content: `Apply to join our mentorship community and start your entrepreneurial journey.`,
    },
  ],
});
</script> 