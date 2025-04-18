<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const { locale, setLocale } = useI18n()


onMounted(() => {
  const lang = localStorage.getItem('locale')
  if (lang) {
    console.log(lang)
    if (lang === 'en') {
      setLocale('en')
    } else {
      setLocale('vi')
    }
  }
})

watch(locale, (newLocale) => {
  const lang = localStorage.getItem('locale')
  if (lang) {
    console.log(lang)
    if (lang === 'en') {
      setLocale('en')
    } else {
      setLocale('vi')
    }
  }
})

useHead({
  title: 'YoungPreneur Academy',
  meta: [
    { name: 'keywords', content: 'YoungPreneur, young, entrepreneur, tech, finance, money' },
    // Open Graph metadata
    { property: 'og:description', content: 'Learn and grow to be entrepreneur with YoungPreneur Academy' },
    { property: 'og:image', content: '/Thumbnail.png' }, // Thumbnail image
    { property: 'og:image:width', content: '1200' }, // Recommended width
    { property: 'og:image:height', content: '630' }, // Recommended height
    { property: 'og:url', content: '' }, // Page URL
    { property: 'og:type', content: 'website' }, // Type of content (e.g., website, article)

    // Twitter metadata (optional, as it may help with cross-platform sharing)
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: '/Thumbnail.png' },

    // General image meta tag
    { name: 'image', content: '/Thumbnail.png' }
  ]
});
</script>

<style>
:root {
  --primary-color: #564497;
  --secondary-color: #f8a025;
  --background-color: #f0d394;
  --mentor-color: #e5cc95;
  --text-color: white;
}
</style>
