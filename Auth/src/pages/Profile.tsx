import React from 'react'
import { useAuth } from '../context/Auth'
import { useNavigate} from 'react-router-dom'


//once kullaniciyi ekleriy burada auth,isdser dikkat edersek login sayfasinda geliyor
//sonra burada cikid icin button koyariz
//sonra biurada tarazicidan konterol ettik once logindem kayolduk sonra profilde gorduk
//hallo deneme Logout
//bunlari tamamladiktan sonra require aauth acariy giris yapip yapmadu[igini kontrol icin ]
const Profile = () => {

  const auth = useAuth()
  const navi =useNavigate()
 
  const handle =()=>{
    auth.logout()
    navi('/')

  }
  return (
    <div>
      hallo   {auth.user}
      <button onClick={handle}>Logout</button>
    </div>
  )
}

export default Profile