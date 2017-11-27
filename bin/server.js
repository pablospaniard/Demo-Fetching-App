const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    "baseDir": ["./", "./app" ]
  },
    open: false
});

http.createServer(onRequest).listen(process.env.PORT || 6000);
