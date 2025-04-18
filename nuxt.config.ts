// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
  ],
  experimental: {
    typedPages: true,
    payloadExtraction: true, // Уменьшает объём передаваемых данных // оптимизация
 },
 nitro: {
    // оптимизация
    compressPublicAssets: true, // Включить сжатие
 },

})
