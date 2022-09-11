
import './App.css';
import Home from './pages/Home.tsx'
import     {BrowserRouter as Router,Routes,Route,useParams}     from 'react-router-dom'
import Profile from './pages/Profile.tsx';
import Login from './pages/Login.tsx'
import Products from './pages/Products.tsx';
import About from './pages/About.tsx';
import { AuthProvider } from './context/Auth';
import RequierAuth from './context/RequierAuth';

function App() {
  return (
    <AuthProvider>

    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profil' element={<RequierAuth> <Profile/> </RequierAuth> }/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/:pagename' element={<PageNot/>}/>

      </Routes>
 
    </Router>
    </AuthProvider>
  );
 //ANLAMSIY BIRSEY YAZILINCA BURDAN SAYFANIN OLMADUIGINI SOYLERIY TEMELEDE BOYLE YAPILIR
  // <Route path='*' element={<PageNot/>}/>
  function PageNot (){
    const params =useParams()
    return(
      <p style={{background:'red'}}>
        {params.pagename}  leider not PAGE
      </p>
    )
  }

}

export default App;
//router duyenlem yaptiktan sonra contrecx yapisina gecilir