const mongoose =require('mongoose')
const Users =require('./models/Users')

const main = ()=>{
  mongoose.connect('mongodb://localhost:27017/signal')//mongodb://ip/port/dbname
  .then(console.log('mongoose baglanti okey'))
  .catch((err)=>console.log(err))
}
main()


Users.insertMany(
[
    

    {
        "fullname": "tippjjjle",
         "password": "3ffflloo",
         "email": "dsuuuuoooouiol@gmail.com",
         "phoneNumber": "12pplllll34"
    
    }
]
    

)