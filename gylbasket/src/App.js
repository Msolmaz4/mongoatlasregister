import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Cart";
import {data} from './data'
import Basket from "./Basket";
import "./App.css";

function App() {
  const [basket,setBasket]= useState([])
  const [total,setTotal] = useState()


useEffect(()=>{
 //kontrol icin 
 //console.log(basket)

  //hesaplamada 
  const son = basket.reduce((pre,basket)=> pre + (basket.amount*basket.price),0)
  setTotal(son)



},[basket])






  

 
  

  return (
    <div className="basket">

      
   

      {
        data.map((er)=>(
          <div>
          <Cart
          basket={basket}
          setBasket={setBasket}
          er={er}/>
            </div>
        ))
      }
      <Basket 
      basket={basket}
      total={total}
      />
    </div>
  );
}

export default App;
