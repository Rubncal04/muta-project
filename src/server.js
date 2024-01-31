import http from "node:http";
import express from "express";
import pkg from 'body-parser';

const { json } = pkg;
const app = express()
const server = http.createServer(app);
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb', extended: true }));
app.use(json())

export { server, app }
