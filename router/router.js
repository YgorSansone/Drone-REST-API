"use strict";
const Drone = require('../modelsdb/model')
const dronerController = require('../controller/dronerController')
const express = require('express')

const router = express.Router();

//Rotas 
router.get("/", (req, res) => res.send("</br><b><h2>Drones como usar :) </h2></h1></br></br></br><b>Lista:</b> GET /drones/</br><b>Detalhes:</b> GET /drones/{id}</br><b>Atualizar:</b> PUT /drones/{id}</br><b>Deletar:</b> DEL /drones/{id}</br><b>Criar:</b> POST /drones/ </br><b>Paginar:</b> GET /drones?_page=7</br><b>Limitar:</b> GET /drones?_limit=20 </br><b>Paginar e limitar:</b> GET /drones?_page=7&_limit=20</br><b>Sort:</b> GET /drones?_sort=fly</br><b>Order:</b> GET /drones?_order=asc</br><b>ordenar por campo:</b> GET /drones?_sort=fly&_order=asc</br>"));

router.get("/drones", dronerController.Gets);

router.get("/drones/:id", dronerController.GetId);

router.post("/drones", dronerController.Post);

router.put("/drones/:id", dronerController.PutId);

router.delete("/drones/:id", dronerController.Delete);

module.exports = router;
