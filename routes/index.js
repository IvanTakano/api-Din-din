const express = require("express");
const CursosController = require("../controllers/cursosController");

const routes = express.Router();

routes.post("/cursos", CursosController.cadastrarCursos);

module.exports = routes;
