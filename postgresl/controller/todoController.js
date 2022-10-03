const {Sequelize}= require('sequelize')
const TodModels = require('../models/TodModels')


exports.addOneTodo =(req,res)=>{
    console.log(req.body)
    res.status(200).json({message:'sucses'})
}