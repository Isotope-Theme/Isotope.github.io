const task = process.argv[2];
const ghpages = require('gh-pages');
const config = require('./config')
const plugins = require('load-metalsmith-plugins')();
const metalsmith = require('metalsmith')(__dirname);


metalsmith
  .source(config.source)
  .destination(config.destination)
  .use(plugins.metadata(config.metadata))
  .use(plugins.filemetadata(config.filemetadata))
  .use(plugins.request(config.request, {
    json: true
  }))
  .use(plugins.assets(config.assets))
  .use(plugins.metallic())
  .use(plugins.markdown())
  .use(plugins.layouts(config.layouts))
  .use(plugins.inPlace(config.inPlace));

if (task === 'watch') {
  metalsmith
    .use(plugins.serve(config.serve))
    .use(plugins.watch(config.watch));
}

metalsmith.build((err) => {
  if (err) throw err;
  else buildCompleted();
});

const buildCompleted = () => {
  if (task === 'deploy') {
    ghpages.publish(config.destination, {
      branch: 'master'
    }, (err) => {
      if (err) throw err;
    });
  }
}
