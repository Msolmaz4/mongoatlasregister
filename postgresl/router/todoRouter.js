const express =require('express')
const router  = express.Router()
const {addOneTodo,getAllTodos} = require('../controller/todoController')


router.get('/',getAllTodos)
router.post('/',addOneTodo)

module.exports= router