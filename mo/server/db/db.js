const mongoose =require('mongoose')


const main=()=>{
    mongoose.connect('mongodb+srv://deneme12:Azxs12345@cluster0.wpuxx.mongodb.net/adana')
    .then(()=>console.log('mongoatlas'))
}
main()