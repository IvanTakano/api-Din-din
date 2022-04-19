const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");

const CursosController = {

    cadastrarCursos(req, res){

        const {titulo, descricao, professor} = req.body;
        //verifica se todos os valores foram preenchidos
        if(!titulo || !descricao || !professor){
            return res
            .status(400)
            .json({error: "Você precisa passar os atributos corretamente"});
        }

        listaDeCursos.push({
            titulo,
            descricao,
            professor,
        });

        fs.writeFileSync("../models/cursos.json", JSON.stringify(listaDeCursos));

        res.status(201).json({message: "Cadastro efetuado com sucesso!"})
    },
};

module.exports = CursosController;