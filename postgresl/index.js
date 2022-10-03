const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({  extended : false}))

const PORT = 7000
require('./models/TodModels')

const todoRouter =require('./router/todoRouter')

app.use('/api/todos',todoRouter)


app.listen(PORT,()=>{
    console.log('in baglanti')
})
