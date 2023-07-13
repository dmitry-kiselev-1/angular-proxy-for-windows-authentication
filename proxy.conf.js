const HttpsAgent = require('agentkeepalive').HttpsAgent;

module.exports = {
  '/api': {
    target: "https://localhost:3000",
    secure: false,
    changeOrigin: true,
    agent: new HttpsAgent({
      maxSockets: 100,
      keepAlive: true,
      maxFreeSockets: 10,
      keepAliveMsecs: 100000,
      timeout: 6000000,
      keepAliveTimeout: 90000
    }),
    onProxyRes: proxyRes => {
      const key = "www-authenticate";
      proxyRes.headers[key] = proxyRes.headers[key] &&
        proxyRes.headers[key].split(",");
    }
  }
}
