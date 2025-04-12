// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "motion-v/nuxt",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  colorMode: {
    preference: "light",
  },
  app: {
    head: {
      title: "YoungPreneur Academy",
      link: [{ rel: "icon", href: "/favicon.ico", id: "favicon" }],
    },
  },
});
