import React, { useContext } from 'react'

import { Authen } from '../context/Auth'

const Favori = () => {

 const {basket } =useContext(Authen)
 console.log(basket.name)
  return (
    <div>
      {
        basket.map((er)=>(
          <div>
            {
              er.name
            }
          </div>
        ))
      }
    </div>
  )
}

export default Favori