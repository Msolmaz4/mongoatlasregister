const {Sequelize}= require('sequelize')
const TodModels = require('../models/TodModels')


exports.addOneTodo = async(req,res)=>{
    //console.log(req.body)
     const {todo,urgent} = req.body
     if(todo ){
        await TodModels.create({todo:todo,urgent:urgent})
        res.status(200).json({message:'sucses'})
     }
   
}
exports.getAllTodos=async(req,res)=>{
    try {
        
        const allTodos =await TodModels.findAll()
        res.status(200).send(allTodos)
    } catch (error) {
        console.log(error)
    }
}

exports.updateTodo =async(req,res)=>{
    const { id } = req.params
    const { todo} =req.body
    await TodModels.update(
        {
            todo:todo
        },
        {
            where:{
                id:id
            }
        })
        res.status(200).json({
            message:'update'
        })
        
}


