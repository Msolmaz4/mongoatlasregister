import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
<BrowserRouter>
<div className="App">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>

  
</div>

</BrowserRouter>
   
  );
}

export default App;
