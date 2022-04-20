const express = require("express");
const cursosController = require("../controllers/cursosController");

const routes = express.Router();

routes.post("/cursos/criar", cursosController.cadastrarCursos);
routes.get("/cursos/buscar", cursosController.buscarCursos);
routes.delete("/cursos/:id/deletar", cursosController.deletarCursos);
routes.put("/cursos/:id/atualizar", cursosController.atualizarCursos);

module.exports = routes;
