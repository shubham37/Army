
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://54.69.172.40:8000',
      changeOrigin: true,
    })
  );
  app.use(
    '/student_api',
    createProxyMiddleware({
      target: 'http://54.69.172.40:8000',
      changeOrigin: true,
    })
  );  
  app.use(
    '/assessor_api',
    createProxyMiddleware({
      target: 'http://54.69.172.40:8000',
      changeOrigin: true,
    })
  );  
  app.use(
    '/admin_api',
    createProxyMiddleware({
      target: 'http://54.69.172.40:8000',
      changeOrigin: true,
    })
  );
};
