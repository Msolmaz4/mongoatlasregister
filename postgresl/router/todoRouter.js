const express =require('express')
const router  = express.Router()
const {addOneTodo,getAllTodos,updateTodo,deleteTodo} = require('../controller/todoController')


router.get('/',getAllTodos)
router.post('/',addOneTodo)
router.patch('/:id',updateTodo)
router.delete('/:id',deleteTodo)

module.exports= router