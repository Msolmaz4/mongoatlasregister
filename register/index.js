const express = require('express')
const dotenv = require('dotenv')
const app = express()
const  bodyParser = require('body-parser')

 
app.use(express.urlencoded({extended:false}))
dotenv.config({path:'.env'})
const cors =require('cors')
const mongoose= require('mongoose')
app.use(cors())
app.use(express.json())


app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
const userRouter =require('./routes/users/userRouter')
 
//mongo adlasa baglandik browse   collecton ordan creata data user product admiin olusrturduk

 mongoose.connect(process.env.MONGO_DB,
    {useNewUrlParser :true , useUnifiedTopology: true})
    .then(()=>app.listen(process.env.PORT ,()=>console.log(`listenig port ${process.env.PORT}`)))
    

app.use('/users',userRouter)




