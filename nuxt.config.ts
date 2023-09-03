const isDev = process.env.NODE_ENV === 'development'

const apiUrl = 'http://localhost:3000'

export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
  imports: {
    dirs: ['./stores', 'composables/**'],
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
    '@nuxtjs/device',
  ],
  experimental: {
    inlineSSRStyles: false,
    viewTransition: true,
    renderJsonPayloads: true,
  },
  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
  },
  runtimeConfig: {
    public: {
      apiUrl,
    },
  },
  image: {
    provider: 'proxy',
    providers: {
      proxy: {
        provider: 'ipx',
        options: {
          baseURL: `${apiUrl}/ipx`,
        },
      },
    },
  },
  devtools: {
    enabled: true,
  },
  nitro: {
    routeRules: {
      '/**': { isr: false },
    },
  },
  pinia: {
    autoImports: [
      'defineStore', 'useStore', 'acceptHMRUpdate', 'storeToRefs',
    ],
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'es-ES',
        file: 'es-ES.json',
      },
    ],
    lazy: true,
    langDir: 'internationalization',
    defaultLocale: 'en',
  },
})
