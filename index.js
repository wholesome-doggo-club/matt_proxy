var express = require('express');
var proxy = require('http-proxy-middleware');
var cors = require('cors');
// proxy middleware options

var options = {
  target: 'http://localhost:3000', // target host
  changeOrigin: true, // needed for virtual hosted sites
  router: {
    '/carouselPhotos': 'http://localhost:3003'
  }
};

// create the proxy (without context)
var exampleProxy = proxy(options);
// mount `exampleProxy` in web server
var app = express();
app.use(cors())
app.use(express.json());
app.use('/api', exampleProxy);
app.use(express.static(__dirname));
app.listen(3000);
