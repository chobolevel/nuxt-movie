export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-movie',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/4f485c5b0b.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/css/init.css', '~/static/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  axios: {
    proxy: true,
  },
  proxy: {
    '/tmdb': {
      target: 'https://api.themoviedb.org/',
      pathRewrite: { '^/tmdb': '' },
    },
  },
}
