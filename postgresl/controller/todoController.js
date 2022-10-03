const {Sequelize}= require('sequelize')
const TodModels = require('../models/TodModels')

//quey yazmak
//const todo =require('../db/db')


exports.addOneTodo = async(req,res)=>{
    //console.log(req.body)
     const {todo,urgent} = req.body
     if(todo ){
        await TodModels.create({todo:todo,urgent:urgent})
        res.status(200).json({message:'sucses'})
     }
   
}
//query bir ornek
exports.getAllTodos=async(req,res)=>{
    try {
        
        const allTodos =await TodModels.findAll()
     // const todos =await todo.query('SELECT*FROM TODOS)
     //console.log(todos[0])

        res.status(200).send(allTodos)
    } catch (error) {
        console.log(error)
    }
}

exports.updateTodo =async(req,res)=>{
    const { id } = req.params
    const { todo} =req.body
    await TodModels.update(
        {todo:todo},
        {
            where:{
                id:id
            }
        })
        res.status(200).json({
            message:'update'
        })
        
}

exports.deleteTodo= async(req,res)=>{
    const { id } = req.params
    const todoD = await TodModels.findByPk(id)
    todoD.destroy()
    res.status(200).json({
        message:'delete'
    })

}


