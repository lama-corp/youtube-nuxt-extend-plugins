export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Youtube Nuxt extendPlugins',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  components: true,

  plugins: ['~/plugins/utils'],

  extendPlugins(plugins) {
    // https://nuxtjs.org/docs/configuration-glossary/configuration-extend-plugins/
    const pluginIndex = plugins.findIndex(item => {
      return item === '~/plugins/utils'
    })
    const shouldBeFirstPlugin = plugins[pluginIndex]

    plugins.splice(pluginIndex, 1)
    plugins.unshift(shouldBeFirstPlugin)

    return plugins
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'C:\\Users\\romai\\Documents\\Projects\\LamaCodeur\\Code\\youtube-nuxt-base\\src',
    'youtube-nuxt-base',
    '~/modules/my-module'
  ],
  build: {
    transpile: ['lodash-es']
  }
}
