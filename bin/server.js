const browserSync = require('browser-sync').create();

browserSync.init({
  port: process.env.PORT || 3000,
  server: {
    "baseDir": ["./", "./app" ]
  },
    open: false
});
