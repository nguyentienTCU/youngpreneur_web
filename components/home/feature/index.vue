<template>
  <div class=" py-12 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-8 ">
      <h2 class="text-center text-2xl sm:text-4xl mb-8 sm:mb-16 font-semibold">
        About Our Program
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-16">
        <HomeFeatureItem
          v-for="item in content"
          :key="item.icon"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const content = [
  {
    title: "Mentorship",
    description:
      "One-on-one guidance from experienced entrepreneurs and industry leaders",
      icon: "i-heroicons:chart-bar",
  },
  {
    title: "Learning",
    description:
      "Practical skills and knowledge to kickstart your entrepreneurial journey",
    icon: "i-heroicons:light-bulb"
  },
  {
    title: "Community",
    description:
      "Connect with like-minded peers and build your professional network",
    icon: "i-heroicons:arrow-up-circle",
  },
];
</script> 