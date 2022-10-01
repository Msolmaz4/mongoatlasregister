import React from 'react'


const Basket = ({basket,total}) => {
  return (
    <div>
        BASKET
     
     {
        basket.map((it)=>(
        <div style={{display:'flex',justifyContent:'center'}}>
            <p>{it.name}x{it.amount}</p>
            <p>${it.price*it.amount}</p>
            
        </div>
        ))
     }
  total: {total}

    </div>
  )
}

export default Basket