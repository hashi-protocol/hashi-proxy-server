const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const API_SERVICE_URL = "http://api.covalenthq.com/v1/";

app.use('/api', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api' : '/'
    },
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.listen(4000);
