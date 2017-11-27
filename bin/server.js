const browserSync = require('browser-sync').create();

browserSync.init({
  port: 9000,
  server: {
    "baseDir": ["./", "./app" ]
  },
    ui: false
});
