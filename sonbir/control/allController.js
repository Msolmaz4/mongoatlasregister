const mongoose = require('mongoose')
const Products =require('../nodels/productModel')

const allController = async (req,res)=>{
    try {
      const deme =  await Products.find()
      res.send(deme)

    } catch (error) {
        console.log(error)
    }


}
module.exports =allController