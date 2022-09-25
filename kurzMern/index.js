const express = require('express')
const app = express()
const port = 3900

require('./db/db')
app.use(express.json())
app.use(express.urlencoded({ extended :false}))

const userRouter =require('./router/userRouter')


app.use('/user',userRouter)

app.listen(port,()=>{
    console.log(`port${port}`)
})









