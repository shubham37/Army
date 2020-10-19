
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
  app.use(
    '/student',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );  
  app.use(
    '/assessor',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );  
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8000',
  //     changeOrigin: true,
  //   })
  // );
};