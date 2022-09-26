const express =require('express')
const app = express()
const Port =9000

app.use(express.json())
app.use(express.urlencoded({ extended :false}))

require('./db/db')
const userRouter = require('./router/userRouter')

app.use('/user',userRouter)

app.listen(Port ,()=>{
    console.log('gorduk')
})


