
import axios from 'axios'
import React,{createContext,useState,useEffect} from 'react'



 export const Authen = createContext()

export  const AuthenProvider = (props)=>{


    const [load ,setLoad] =useState([])

    const [adana,setAdana] =useState(true)

    const [filter,setFilter] =useState()
    

   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setLoad(res.data))

    },[])


console.log('filter',filter)

useEffect(()=>{

        const ada =load.filter((er)=>er.name.toLowerCase().includes(filter.toLowerCase()))
        if(ada.length > 0 ){
            setLoad(ada)
        }
      
    
   

},[filter])




    return(
<Authen.Provider value={{load ,filter,setFilter,adana,setAdana}}>
        {props.children}
    </Authen.Provider>
    )

    
 }




