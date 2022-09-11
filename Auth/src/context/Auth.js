import {createContext, useContext, useState} from 'react'

const AuthContex =createContext()

export const AuthProvider = ({children})=>{
    
    //burada basta user olusturury cunku bunun giris yapim yapmmamsina gore ayar yapacagiy
    //login ve logout olusturtduk devam ettik
    const [user,setUser] = useState()

    const login =(user) =>{
        setUser(user)
    }
    const logout = ()=>{
        setUser(null)
    }


 return (
    <AuthContex.Provider value={{user,login,logout}}>
        {children}

    </AuthContex.Provider>
 )

} 

export const useAuth =()=>{
    return useContext(AuthContex)
}