const { name } = require('ejs')
const express = require('express')
const app =express()
const Port =8700

//ejs langune indirdim kolaylik
//burada ejs tanimla yoks ahata alirsin
app.set('view engine','ejs')

//public dosyasini acariy bu onmeli disari acmak gerekiyor
//image kullandik direk yazdik
app.use(express.static('public'))
//ayrica node_module cikarmamiz gerekiyor
//cunkyu botssrtap yukldeik onun icinsde nide module gidiyor
app.use(express.static('node_modules'))


const data = 
[
    { id:1 ,name:'iphone 12',price:'4000',imageUrl:'1.jpg'},
    { id:2 ,name:'iphone 1',price:'600',imageUrl:'2.jpg' },
    { id:3 ,name:'iphone',price:'9000',imageUrl:'3.jpg'}
    
]

app.use('/products/:id',(req,res)=>{
    const deneme =data.find(u=>u.id == req.params.id)
    res.render('productsdetails',deneme)
    
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