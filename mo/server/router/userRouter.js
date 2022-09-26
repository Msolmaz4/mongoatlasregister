const router =require('express').Router()
const Users =require('../models/Users')
const bcrypt = require('bcrypt');


router.post('/signup',async(req,res)=>{

    try { 
        const { fullname,email,password,phoneNumber} = req.body
    console.log(fullname,email,password,phoneNumber)
     
    const neuEmail = await Users.findOne({email :email})
    if(neuEmail) return res.status(400).json({message:'email mevcut'})

     const hash = await bcrypt.hash(password,10)
    const createUser = await Users.create({
        fullname,email,password:hash,phoneNumber
    })

    return res.status(201).json(createUser)
        
        
    } catch (error) {
        
        console.log(error)
    }

})


router.post('/signin',async(req,res)=>{

    try {
        const {email,password}= req.body

        const user = await Users.findOne({email})
        if(!user) return res.status(400).json({message:'kullanici yok'})
        const pass = await bcrypt.compare(password ,user.password)
        if(!pass) return res.status(400).json({message:'password gum'})

        return res.status(200).json({message:'okey'})


        
    } catch (error) {
        console.log(error)
    }
})
module.exports =router