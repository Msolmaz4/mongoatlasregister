const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({  extended : false}))

const PORT = 8000
require('./models/TodModels')


app.listen(PORT,()=>{
    console.log('in baglanti')
})
