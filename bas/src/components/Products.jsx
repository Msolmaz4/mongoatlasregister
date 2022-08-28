import React from 'react'
import  data  from '../data'
import Cards from './Cards'

const Products = ({say,eks}) => {
  return (
    <div>Products

    {data.map((er)=>(
        <div>{
             <Cards
             eks={eks}
             say={say}
             des={er.description}
             foto={er.photos}
             title={er.title}
              price={er.price}/>
            
            }</div>
    ))}


    </div>
  )
}

export default Products