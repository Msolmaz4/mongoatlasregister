const Users = require('../models/Users')
const bcrypt = require('bcrypt')

const userController = async(req,res)=>{
    try {
    const { fullname,email,password,phoneNumber} = req.body
    console.log(fullname,email,password,phoneNumber)
     
    const neuEmail = await Users.findOne({email :email})
    if(neuEmail) return res.status(400).json({message:'email mevcut'})


    const newUser = await new Users({
        fullname:fullname,
        email:email,
        password: bcrypt.hashSync(password,8),
        phoneNumber:phoneNumber
    })
    newUser.save()
    .then(()=>res.status(200).send('succes'))
    .catch((err)=>res.send('save falsv'))
        
    } catch (error) {
        console.log(error)
    }

}

module.exports =userController