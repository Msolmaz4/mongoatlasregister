import React from 'react'


const Cart = ({er,setBasket,basket}) => {
   //kac tane sectih-gimiy g;stermek icinP
const basketPro =basket.find((ty)=>ty.id === er.id)

const add =()=>{

    const dene = basket.find((otem)=>otem.id === er.id)
    if(dene){
        //basket varsa
        dene.amount +=1
        setBasket([...basket.filter((it)=>it.id !== er.id),{
            id:er.id,
            name:er.name, 
            price:er.price,
            amount:dene.amount
        }])


    }else{
        setBasket([...basket,{
            id:er.id,
            name:er.name,
            price  : er.price,
            amount:1
        }])
    }

 
   
}

const remove =()=>{
    const dene =basket.find((it)=>it.id === er.id)
    dene.amount -= 1
    if(dene.amount === 0){
        setBasket([...basket.filter((it)=>it.id !==er.id)])
    }
    else{
        setBasket([...basket.filter((rt)=>rt.id !== er.id),
        {
            id:er.id,
            name:er.name,
            price  : er.price,
            amount:dene.amount 

        }])
    }
}


  return (
    <div>
        <div> {er.id} </div>
        <div> {er.name} </div>
        <div> {er.price} </div>
        <button onClick={add}> elke</button>
        {  basketPro && basketPro.amount || 0}
        <button onClick={remove}> Sil</button>
    </div>
  )
}

export default Cart