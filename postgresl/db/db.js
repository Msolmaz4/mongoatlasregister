const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/test' ,{
    logging:false
})
//Testing the connection
sequelize.authenticate()
.then(()=>console.log('connect'))
.catch((err)=>console.log(err))
//Synchronizing the model with the database
//sekronoye etmek icin
//false yap cunnku zoksa her acildiginda tabloyu siler yeniden eyukler yani her calistidind asifirlanir
function syncSequlize(){
    return sequelize.sync({force :false})
}
sequelize.didSync = syncSequlize

module.exports = sequelize