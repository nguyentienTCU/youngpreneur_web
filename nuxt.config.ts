// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["aos/dist/aos.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "motion-v/nuxt",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        langDir: "locales",
        defaultLocale: "vi",
        locales: [
          { code: "en", name: "English", file: "en.json" },
          { code: "vi", name: "Vietnamese", file: "vi.json" },
        ],
        localDetection: false,
      },
    ],
  ],
  build: {
    transpile: ["@ant-design/icons-vue"],
  },
  colorMode: {
    preference: "light",
  },
  app: {
    head: {
      title: "YoungPreneur Academy",
      link: [{ rel: "icon", href: "/favicon.ico", id: "favicon" }],
    },
  },
  runtimeConfig: {
    public: {
      sheetyUrl: process.env.SHEETY_URL,
    },
  },
});
