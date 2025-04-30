<template>
  <div class="relative w-full aspect-[16/9] sm:aspect-[16/9] overflow-hidden border-b border-slate-200 pt-12">
    <div class="flex w-full h-full pointer-events-none">
      <InspiraSpline :scene="sceneUrl" class="w-full h-full mt-12" />
    </div>
  </div>
</template>

<script setup lang="ts">
const sceneUrl = "https://prod.spline.design/HMi1Hcw6Dd1j7Uio/scene.splinecode";
</script>