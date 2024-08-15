// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json'
      }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix_and_default',
    lazy: true
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap'
  },
  css: [
    '@/assets/css/main.css'
  ]
})