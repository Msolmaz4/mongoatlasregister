import React from 'react'
import Navba from './Navba'

const Home = ({user,setUser}) => {
  //burada user diye birsey varsa ? onun bakar yoksa devamn eder email gosyert soru isareti koymsaaak paylar
  return (
    <div>
        <Navba user={user} setUser={setUser} />
      
        {user?.email}
        
    </div>
  )
}

export default Home