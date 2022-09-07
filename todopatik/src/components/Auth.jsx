import React, { useEffect, useState } from 'react'
//BU LOGINKEDI DEGISIJKLIGE KONTROLEDERIY
import { onAuthStateChanged} from 'firebase/auth'
import { auth } from './FireBase'

const AuthContext =React.createContext()

export const AuthContextProvider =(props) =>{
    const [current ,setCurrent] = useState()


    useEffect(()=>{
        //iki tabe parametre aliyor bunlardan biri autj digeri foksiyon  callback foksiyon
        //user yaptim bu islemyapilim yapilmaduguni bakar
        //burada islem zapilmissa user olarak bunu buy koyduk doner
        onAuthStateChanged(auth,(user)=>{
            setCurrent(user)
        })

    },[])



    return(

        <AuthContext.Provider value={{current}}>
            {props.children}
        </AuthContext.Provider>

    )
    





}

export default AuthContext