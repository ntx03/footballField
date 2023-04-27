// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/normalize.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_index.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'ФЕСПО',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './public/favicon.ico' },
      ],
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  modules: [],
});
