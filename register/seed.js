const mongoose =require('mongoose')

const Users = require('./models/userModels')

const main =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/eRegis')
    .then(()=>console.log('seed den geldik'))
    .catch(()=>console.log('db kayniyor'))

    
}
main()


const pro =[{
    name:'adam',
    email:'email:gmail.com',
    password:'123,',
    surname:'adana'
}]

Users.insertMany(pro)