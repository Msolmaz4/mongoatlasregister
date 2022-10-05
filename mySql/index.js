const express = require('express')
const app =express()
const Port =8700

//ejs langune indirdim kolaylik
//burada ejs tanimla yoks ahata alirsin
//app.set('view engine','ejs')

const data = 
[
    { id:1 ,name:'iphone 12',price:'4000'},
    { id:2 ,name:'iphone 1',price:'600'},
    { id:3 ,name:'iphone',price:'9000'}
    
]

app.use('/products/:id',(req,res)=>{
    res.render('products/details')
})

//burada datayi gonderrirken direk gonderemeyiz
// res.render('products',data)
app.use('/products',(req,res)=>{
    res.render('products',{
        urunler:data
    })
})


app.use('/',(req,res)=>{
    res.render('ana sayfa')
})

app.use('/',(req,res)=>{
    console.log('denem')
})

app.listen(Port ,()=>{
    console.log('listen')
})