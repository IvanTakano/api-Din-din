const Curso = require("../models/Cursos");
//const fs = require("fs");
//const db = require("../database/index");

const CursosController = {

    async cadastrarCursos(req, res){

        const { titulo, descricao, professor} = req.body;
        //verifica se todos os valores foram preenchidos
        if(!titulo || !descricao || !professor){
            return res
            .status(400)
            .json({error: "Você precisa passar os atributos corretamente"});
        }       
        const novoCurso = await Curso.create({
            titulo, 
            descricao, 
            professor 
        });

        res.status(201).json("Produto cadastrado!");
    },

    async buscarCursos(req, res){

        const cursos = await Curso.findAll();        

        res.status(200).json(cursos);
    },

    async deletarCursos(req, res) {
        const {id} = req.params;

        await Curso.destroy({
            where: {
                id,
            },
        });
        res.status(204).json("Produto deletado")
    },

    async atualizarCursos(req, res) {
        const {id} = req.params;
        const { titulo, descricao, professor} = req.body;

        const cursoAtualizado = await Curso.update(
            {
                titulo, 
                descricao, 
                professor
            },
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).json("Produto Atualizado!")
    },

};

module.exports = CursosController;