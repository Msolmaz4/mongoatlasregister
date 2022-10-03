const express =require('express')
const router  = express.Router()
const {addOneTodo,getAllTodos,updateTodo} = require('../controller/todoController')


router.get('/',getAllTodos)
router.post('/',addOneTodo)
router.patch('/:id',updateTodo)

module.exports= router