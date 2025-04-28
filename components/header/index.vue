<template>
  <div
    class="fixed inset-x-0 top-0 z-50 duration-200 group bg-gradient-to-b from-white lg:from-white/75 opacity-100 -translate-y-0">
    <div class="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl relative">
      <nav class="flex items-center justify-between gap-4 duration-200 py-4">
        <div class="flex gap-4 items-center">
          <UButton color="white" variant="ghost" size="xl" icon="i-heroicons:bars-3-solid" class="lg:hidden" square
            padded @click="isOpenMenu = true" />
          <USlideover v-model="isOpenMenu" side="left">
            <div class="p-8 mb-4">
              <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
                class="flex absolute end-5 top-5 z-10" square padded @click="isOpenMenu = false" />
              <div class="flex flex-1 flex-col gap-2">
                <NuxtLink class="text-slate-500 text-xl px-3 py-4 hover:text-slate-900"
                  :class="{ 'text-slate-900 underline': route.path === '/' }" to="/" @click="isOpenMenu = false">Home
                </NuxtLink>
                <NuxtLink v-for="item in navItems" :key="item.path"
                  class="text-slate-500 text-xl px-3 py-4 hover:text-slate-900"
                  :class="{ 'text-slate-900 underline': route.path === item.path }" :to="item.path"
                  @click="isOpenMenu = false">{{ item.name }}</NuxtLink>
              </div>
            </div>
          </USlideover>
          <NuxtLink to="/">
            <!-- <NuxtImg preload :class="route.path === '/' ? 'w-8 h-10' : 'w-9 h-8'" :src="route.path === '/' ? '/logo_image.png' : '/logo_image_black.png'" /> -->
            <NuxtImg preload class="'w-10 h-10" src="/logo_image_black.png" />
          </NuxtLink>
        </div>

        <div class="ml-3 hidden flex-grow gap-2 lg:flex">
          <NuxtLink v-for="item in navItems" :key="item.path"
            class="text-slate-500 text-xl px-3 py-4 hover:text-slate-900"
            :class="{ 'text-slate-900 underline': route.path === item.path }" :to="item.path"
            @click="isOpenMenu = false">{{ item.name }}</NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <button v-for="locale in locales" :key="locale.code" @click="clicked(locale.code)"
            class="flex items-center gap-2">
            <img :src="`/${locale.code === 'vi' ? 'vietnamese-flag' : 'english-flag'}.png`" class="w-6 h-4"
              :alt="locale.name" />
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '#imports'

const route = useRoute();
const { t, locales, setLocale } = useI18n()

const navItems = computed(() => [
  {
    path: "/timeline",
    name: t('header.timeline'),
  },
  {
    path: "/services",
    name: t('header.services'),
  },
  {
    path: "/profiles",
    name: t('header.profiles'),
  },
  {
    path: "/projects",
    name: t('header.projects'),
  },
  {
    path: "/apply",
    name: t('header.apply'),
  },
  {
    path: "/blog",
    name: t('header.blog'),
  },
]);

const isOpenMenu = ref(false);
const clicked = (code: 'en' | 'vi') => {
  setLocale(code)
  localStorage.setItem('locale', code)
}
</script>
