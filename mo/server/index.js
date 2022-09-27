const express =require('express')
const app = express()
const Port =9000

//bunu client sonra kurduk gelen her istegi gecirmek bu yzden cors kuruldu
const cors =require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended :false}))

require('./db/db')
const userRouter = require('./router/userRouter')

app.use('/user',userRouter)

app.listen(Port ,()=>{
    console.log('gorduk')
})


