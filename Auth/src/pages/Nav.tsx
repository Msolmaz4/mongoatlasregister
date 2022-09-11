import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/Auth'
//burad auth ile duyenleme zapinca profilr gifdidp duzenleme yapmammis gerekiyor
const Navb = () => {

    const auth = useAuth()
  return (
    <div>
 <ul>
   <Link to='/'><li>Home</li> </Link> 
   <Link to='/profil'><li>Profil</li> </Link> 
   <Link to='/products'><li>Products</li> </Link> 
   <Link to='/about'><li>About</li> </Link> 
   <Link to='/login'><li>Login</li></Link>
 </ul>
    {
        !auth && (
            <Link to='/login'>Login</Link>
        )
    }
    </div>
  )
}

export default Navb