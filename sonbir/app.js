const express= require('express')
const app = express()
const PORT =4008
const mongoose =require('mongoose')


const dotenv =require('dotenv')
dotenv.config({path:'.env'})

const cors =require('cors')


app.use(cors())
app.use(express.urlencoded({extends:false}))
app.use(express.json())

const productsRouter=require('./routes/productsRouter.js')

mongoose.connect(
'mongodb+srv://eCommerce:Azxs12345@cluster0.wpuxx.mongodb.net/eCommerce?retryWrites=true&w=majority',
{useNewUrlParser :true , useUnifiedTopology: true} )
.then(()=>app.listen(PORT ,()=>console.log(`listenig port ${PORT}`)))
app.use('/products',productsRouter)



