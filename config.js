module.exports = {
  source: 'src/',
  destination: 'build',
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
  assets: {
    source: 'assets/',
    destination: './assets'
  },
  layouts: {
    engine: 'handlebars',
    directory: 'layouts/',
    partials: {
      header: '../partials/header',
      footer: '../partials/footer'
    }
  },
  inPlace: {
    directory: 'layouts/',
    engine: 'handlebars'
  },
  serve: {
    port: 8000,
    verbose: true
  },
  watch: {
    paths: {
      "${source}/**/*": true,
      "assets/**/*": "**/*",
      "layouts/**/*": "**/*.html",
      "partials/**/*": "**/*.html"
    }
  }
};
