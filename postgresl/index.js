const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({  extends : false}))

const Port = 3000


app.listen(Port,()=>{
    console.log('in baglanti')
})
