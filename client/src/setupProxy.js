const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware({
      target: "http://ec2-3-36-78-57.ap-northeast-2.compute.amazonaws.com:8080",
      changeOrigin: true,
    })
  );
};
