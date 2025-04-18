<template>
  <div>
    <TimelineBanner />
    <!-- Timeline Content -->
    <Timeline />

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Join the Program?</h2>
        <p class="text-xl text-gray-600 mb-8">Take your business case skills to the next level with our expert-led
          training sessions</p>
        <NuxtLink to="/apply">
          <button class="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Apply Now
          </button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>