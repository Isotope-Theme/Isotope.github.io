module.exports = {
  source: 'src/content',
  destination: 'dist',
  metadata: {
    site: 'site.yml'
  },
  filemetadata: [{
      pattern: '**/*.html',
      metadata: {
        'baseurl': '..'
      }
    },
    {
      pattern: 'index.html',
      metadata: {
        'baseurl': '.'
      }
    }
  ],
  request: {},
  assets: {
    source: 'src/assets',
    destination: './assets'
  },
  layouts: {
    engine: 'handlebars',
    directory: 'src/layouts',
    partials: {
      header: '../partials/header',
      footer: '../partials/footer'
    }
  },
  inPlace: {
    directory: 'src/layouts',
    engine: 'handlebars'
  },
  serve: {
    port: 8000,
    verbose: true
  },
  watch: {
    paths: {
      "${source}/**/*": true,
      "src/assets/**/*": "**/*",
      "src/layouts/**/*": "**/*.html",
      "src/partials/**/*": "**/*.html"
    }
  }
};
