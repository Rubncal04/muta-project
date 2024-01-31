const http = require("node:http");
const express = require("express");
const { json } = require('body-parser');

const app = express()
const server = http.createServer(app);
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb', extended: true }));
app.use(json())

module.exports = { server, app }
