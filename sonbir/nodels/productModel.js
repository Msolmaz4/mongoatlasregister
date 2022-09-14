const mongoose = require('mongoose')

const ProductShema = new mongoose.Schema({
  

    title:{
        type:String

    },
    price:{
        type:String
    }


})

const Products = mongoose.model('Products',ProductShema)
module.exports=Products