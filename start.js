const browserSync = require('browser-sync').create();

browserSync.init({
  open: true,
  port: 3000,
  notify: false,
  watch: true,
  reloadOnRestart: true,
  // single: true,
  server: ["www"],
  logLevel: "info"
});
