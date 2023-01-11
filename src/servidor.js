import express from "express";
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from "socket.io";
import "./config/db.js";

const app = express()
const porta = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual,"../..","public");

app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(porta,()=>{console.log(`Servido conectado na porta com ID:${porta}`)});

const io = new Server(servidorHttp);

export default io;