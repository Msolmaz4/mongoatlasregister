const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const todo = new Sequelize('postgres://postgres:12345@localhost:5432/dene' ,{
    logging:false
})
//Testing the connection
todo.authenticate()
.then(()=>console.log('connect pu'))
.catch((err)=>console.log(err))
//Synchronizing the model with the database
//sekronoye etmek icin
//false yap cunnku zoksa her acildiginda tabloyu siler yeniden eyukler yani her calistidind asifirlanir
function syncTodo(){
    return todo.sync({force :false})
}
todo.didSync = syncTodo

module.exports = todo