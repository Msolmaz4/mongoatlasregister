const todo = require('../db/db')
const Sequelize = require('sequelize')

const TodModels = todo.define(
    'todos', // databased dki ismini yapitoruz sonra sutunlari olustiruruz
    {
        todo:{
           type: Sequelize.STRING,
           allowNull :false
        },//acil
        urgent:{
     
            type:Sequelize.BOOLEAN,
            allowNull :false

        }
    },{
        timestamps:true //zaamai kayedeizor
    }
)
module.exports =TodModels