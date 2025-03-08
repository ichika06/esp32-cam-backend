const express = require("express");
const httpProxy = require("http-proxy");

const app = express();
const proxy = httpProxy.createProxyServer({});
const ESP_STREAM_URL = "http://192.168.1.10/stream";

app.get("/stream", (req, res) => {
  proxy.web(req, res, { target: ESP_STREAM_URL, changeOrigin: true });
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
