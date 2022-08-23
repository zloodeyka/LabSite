const dotenvFileName = process.env.NODE_ENV === 'development' ? '.env' : '.env.prod'

export default {

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Univeris Further education office',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'devextreme/dist/css/dx.light.css',
    'devextreme/dist/css/dx.common.css',
    '@/assets/css/components.scss',
    '@/assets/css/footer.scss',
    '@/assets/css/header-component.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    ['@nuxtjs/dotenv', { filename: dotenvFileName }],
    '@nuxt/content',
    ['nuxt-i18n', {
      strategy: 'no_prefix',
      defaultLocale: 'en',
      lazy: true,
      langDir: 'lang/',
      detectBrowserLanguage:
      {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: true,
        cookieCrossOrigin: true,
        redirectOn: 'root',  // recommended
      }
    }
    ],
  ],

  manifest: {
    name: 'Univeris Further education office',
    short_name: 'Univeris Further education office',
    lang: 'en',
    display: 'standalone',
  },

  i18n: {
    locales: [
      {
        code: "RU",
        name: "Русский",
        iso: "ru-RU",
        file: 'ru-RU.js',
      },
      {
        code: "EN",
        name: "English",
        iso: "en-US",
        file: 'en-US.js',
      }
    ],
    defaultLocale: 'EN',
    vueI18n: {
      fallbackLocale: "EN",
    }
  },
}
