import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
   
   </div>
    
    </BrowserRouter>
  
  );
}

export default App;
