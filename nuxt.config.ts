// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      meta: [
        { name: 'description', content: 'FE Tech assessment' }
      ],
    }
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxt/fonts'
  ],
  // @ts-ignore
  fonts: {
    google: {
      families: {
        Roboto: [400, 700]
      },
      display: 'swap'
    }
  }
})

