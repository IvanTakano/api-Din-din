const db = require("../database/index");
const { DataTypes } = require("sequelize");


const Cursos = db.define("Cursos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
        }, 
        descricao: {
            type: DataTypes.STRING,
        }, 
        professor: {
            type: DataTypes.STRING,
        },        
    },
    {
        tableNome: "cursos", 
        timestamps: false,
    }
);

module.exports = Cursos;