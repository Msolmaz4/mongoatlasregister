const mongoose =require('mongoose')


const main=()=>{
    mongoose.connect('mongodb://localhost:27017/signal')
    .then(()=>console.log('mongobaglandi'))
    .catch((err)=>console.log(err))
}
main()