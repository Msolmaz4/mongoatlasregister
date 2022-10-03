const express =require('express')
const router  = express.Router()
const {addOneTodo} = require('../controller/todoController')

router.post('/',addOneTodo)

module.exports= router