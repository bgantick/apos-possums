var apos = require('apostrophe')({
  baseUrl: 'http://localhost:3000/',
  shortName: 'headless',
  title: 'headless',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // Add custom apostrophe-modules and their respective configuration here!
    'apostrophe-headless': { bearerTokens: true },
    'possums': { extend: 'apostrophe-pieces' }
  }
});
