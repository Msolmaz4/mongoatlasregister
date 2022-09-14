const router = require('express').Router()
const allController =require('../control/allController')
const addProduct =require('../control/addProduct')

router.post('/',allController)
router.post('/add',addProduct)


module.exports =router