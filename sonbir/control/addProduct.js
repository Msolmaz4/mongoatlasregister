const mongoose = require('mongoose')
const Products =require('../nodels/productModel')


const addProduct = async (req,res)=>{
    const {title,price }= req.body
    try {
        const newProductl = await new Products({
            title:title,
            price:price

        })
        newProductl.save()
        .then(()=>console.log(res.Products))
       // .then(()=>res.status(200).send('succes'))
        .catch((err)=>console.log(err))
        
        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports = addProduct