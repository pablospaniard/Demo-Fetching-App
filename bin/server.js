const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
      port: process.env.PORT || 5000,
    "baseDir": ["./", "./app"]
  },
    open: false
});
