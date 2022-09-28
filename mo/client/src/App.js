import React , {useState}from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
 
const [user,setUser] =useState()
console.log(user)
 


  return (
<BrowserRouter>
<div className="App">
  <Routes>
    <Route path='/' element={<Home  user={user} setUser={setUser} />}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login setUser={setUser}/>}/>
  </Routes>

  
</div>

</BrowserRouter>
   
  );
}

export default App;
