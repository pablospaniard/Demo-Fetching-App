const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
      port: process.env.PORT,
      "baseDir": ["./", "./app"]
  },
    open: false
});


