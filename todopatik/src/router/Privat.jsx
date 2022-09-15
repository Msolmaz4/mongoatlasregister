import { Outlet ,Navigate} from "react-router-dom"
import { useContext } from "react"
import  AuthContext from "../components/Auth"

const Privat = () => {

//BURADA once isAu cagirdik sonra fals vey tru gire azar yaptik false lofine g;nderrir

/**burad fals eoldugundan hep logine gider
 * const { isAuthenticated } =useContext(UserContext)
  if(isAuthenticated){
    return <Outlet/>
  }

  return <Navigate to='/login'/>
 * 
 */


  const { isAuth } =useContext(AuthContext)
  if(isAuth){
    return  <Outlet/>
   }
 
  

   if(!isAuth){
    return  <Navigate to='/login'/> && alert('deneme')
   }






  
}

export default Privat