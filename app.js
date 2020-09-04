const express = require('express')
const app = express()
//ROTAS
const Drone = require('./router/router')

app.use(express.json());

app.use(Drone);

module.exports = app