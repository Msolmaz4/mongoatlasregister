import React from 'react'
import Home from './components/Home'
import  './App.css'
import  {AuthenProvider}  from './context/Auth.jsx'

const App =()=>{
  return(
    <div>
    <AuthenProvider>
    <Home/>
    </AuthenProvider>
    
    </div>
  )
}
export default App