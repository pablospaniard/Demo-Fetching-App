const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
      port: process.env.PORT || 5000,
      host: process.env. IP || "localhost",
      "baseDir": ["./", "./app"]
  },
    open: false
});
