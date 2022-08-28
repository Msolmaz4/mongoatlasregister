import React, { useState } from 'react'
import './App.css';
import Products from './components/Products';
//import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1'



function App() {


  const [count,setCount]= useState(Number)
  
       


  const say = ()=>{
    setCount(count+1)
    console.log(count)
    setBasket(count)
    
  }

  const eks = ()=>{
    if(count < 0){
      alert('urun yok')
    }
    else{
      setCount(count-1)
      setBasket(count)
    }
 
  }



  const [basket ,setBasket] = useState(0)
  return (
    <div>
 <Navbar1
  basket={basket}
  setBaket={setBasket}
 />

<Products 
eks ={eks}
say={say}/>

    </div>
  
 
 
  );
}

export default App;
