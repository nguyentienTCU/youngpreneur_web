<template>
    <div class="relative w-full h-screen overflow-hidden border-b border-slate-200">
      <div class="flex h-full pointer-events-none">
        <InspiraSpline
          :scene="sceneUrl"
          class="mt-24 size-full"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const sceneUrl = "https://prod.spline.design/gcrUVv-O1BoJktwr/scene.splinecode";
  </script>