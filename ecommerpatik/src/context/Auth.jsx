
import axios from 'axios'
import React,{createContext,useState,useEffect} from 'react'


 export const Authen = createContext()

export  const AuthenProvider = (props)=>{


    const [load ,setLoad] =useState([])

    const [filter,setFilter] =useState()
    

   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setLoad(res.data))

    },[])


console.log('filter',filter)




    return(
<Authen.Provider value={{load ,filter,setFilter}}>
        {props.children}
    </Authen.Provider>
    )

    
 }




