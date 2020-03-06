module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kingeunji-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dev blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.1.0/jquery-migrate.min.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
 css: [
    '~/assets/css/bootstrap/css/bootstrap.css',
    '~/assets/css/theme-1.css'
  ],
    /*
    ** Plugins to load before mounting the App
    */
  plugins: [
    '@/plugins/element-ui',
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

