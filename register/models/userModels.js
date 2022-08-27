const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema(
{
    email:String,
    password:String,
    surname:String,
    name:String

}
)
       
        
    
   
        
        
  
    




const Users = mongoose.model('User',UserSchema)
module.exports =Users