import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import { AuthContextProvider } from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Todo from "./components/Todo";
import Public from "./router/Public";
import Privat from "./router/Privat";


function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
    <div className="App">
        <Routes>
        <Route element={<Public/>}>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          </Route>
             
   
          <Route  element ={<Privat/>}>

          <Route path="/todo" element={<Todo/>}/>
          </Route>
        </Routes>
   
   </div>
    </AuthContextProvider>
      
    
    </BrowserRouter>
  
  );
}

export default App;
