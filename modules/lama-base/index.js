import path from 'path'

export default async function (moduleOptions) {
  // Auto import components: https://go.nuxtjs.dev/config-components
  this.options.components = true

  // Including modules
  await this.requireModule('@nuxtjs/svg')
  // Don't load these modules when starting the server
  if (!this.options._start) {
    // https://go.nuxtjs.dev/eslint
    await this.requireModule('@nuxtjs/eslint-module')
    // https://go.nuxtjs.dev/stylelint
    await this.requireModule('@nuxtjs/stylelint-module')
    // https://go.nuxtjs.dev/tailwindcss
    await this.requireModule('@nuxtjs/tailwindcss')
  }

  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: path.resolve(__dirname, 'components'),
    })
  })

  this.extendRoutes((routes) => {
    // eslint-disable-next-line no-console
    // console.log(routes)
    // Add one or more elements at the beginning of the array
    routes.unshift({
      name: 'index',
      path: '/',
      component: path.resolve(__dirname, 'pages/index.vue'),
    })
  })

  this.addLayout(path.resolve(__dirname, 'layouts/default.vue'), 'base.default')
}
