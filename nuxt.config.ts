// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      'apikey': 'https://api.chas-man.games/api/v1'
    }
  },
  css: ['~/assets/css/global.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  googleFonts: {
    families: {
      'Inter Tight': true
    }
  }
})