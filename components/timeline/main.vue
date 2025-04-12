<template>
    <div class=" py-12 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 md:px-8 ">
        <h2 class="text-center text-2xl sm:text-4xl mb-8 sm:mb-16 font-semibold">
            Analytics that drive your business
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-16">
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
      title: "Financial Planning",
      description:
        "Create and maintain a perfect personal financial plan.",
      icon: "i-heroicons:currency-dollar",
    },
    {
      title: "Debt and Investment Management",
      description:
        "Manage your debts and invest wisely with targeted advice tailored to your goals.",
      icon: "i-heroicons:chart-bar",
    },
    {
      title: "Financial Education",
      description:
        "Providing knowledge on basic and advanced financial concepts to empower your decisions.",
      icon: "i-heroicons:academic-cap",
    },
    {
        title: "Predictive Financial Analytics",
        description:
          "Utilize AI to analyze and predict financial trends to make smart decisions.",
        icon: "i-heroicons:arrow-trending-up",
      },
  ];
  </script>
  