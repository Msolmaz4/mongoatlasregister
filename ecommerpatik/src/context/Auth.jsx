
import axios from 'axios'
import React,{createContext,useState,useEffect, useRef} from 'react'



 export const Authen = createContext()

export  const AuthenProvider = (props)=>{


    const [load ,setLoad] =useState([])

    const [adana,setAdana] =useState(true)

    const [filter,setFilter] =useState()


 const selectRef = useRef()
 const minRef = useRef()
 const maxRef = useRef()

 const handle1 =()=>{
    console.log(
        minRef.current.value,
        maxRef.current.value,
        selectRef.current.value
    )
 }
    

   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setLoad(res.data))
        console.log(load)

    },[])


console.log('filter',filter)

useEffect(()=>{

        const ada =load.filter((er)=>er.name.toLowerCase().includes(filter.toLowerCase()))
        if(ada.length > 0 ){
            setLoad(ada)
        }
      

   

},[filter])




    return(
<Authen.Provider value={{load ,filter,setFilter,adana,setAdana,selectRef,minRef,maxRef,handle1}}>
        {props.children}
    </Authen.Provider>
    )

    
 }




