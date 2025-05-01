<template>
  <div class="relative w-full aspect-[12/9] sm:aspect-[16/9] overflow-hidden border-b border-slate-200 no-padding-md-range ">
    <div class="flex sm:w-full h-full pointer-events-none">
      <InspiraSpline :scene="sceneUrl" class="sm:w-full sm:h-full sm:mt-12" />
    </div>
  </div>
</template>

<script setup lang="ts">
const sceneUrl = "https://prod.spline.design/HMi1Hcw6Dd1j7Uio/scene.splinecode";
</script>

<style scoped>
@media (max-width: 768px), (min-width: 992px) {
  .no-padding-md-range {
    padding-top: 3rem;
  }
}
</style>

