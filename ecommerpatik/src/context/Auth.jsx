
import axios from 'axios'
import React, { createContext, useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'


import { useNavigate } from 'react-router-dom'


export const Authen = createContext()

export const AuthenProvider = (props) => {

    const [load, setLoad] = useState([])

    const [adana, setAdana] = useState(false)

    const [filter, setFilter] = useState()

    const [mail, setMail] = useState()
    const [pass, setPass] = useState()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [asal, setAsal] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    })



    const yol = useNavigate()
    const selectRef = useRef()
    const minRef = useRef()
    const maxRef = useRef()



    const handle1 = (e) => {
        try {

            console.log(
                minRef.current.value,
                maxRef.current.value,
                selectRef.current.value)


        } catch (error) {
            alert('navige')
        }

    }

    const handle2 = (e) => {
        e.preventDefault()
        console.log('de', mail, pass)
        if(
            asal.email == mail && asal.password == pass
        )
        {
            setAdana(true)
            yol('/')
        }else{
            alert('burdaysak bitik')
        }





    }

    const handle3 = (e) => {
        e.preventDefault()
        console.log(name, email, password)

        setAsal({
            id: nanoid(),
            name: name,
            email: email,
            password: password

        })
        console.log(asal)
        yol('/login')

       
        /* 
        burada dikkat edilmesi gerekli olan tek kullanici gibi olur
        
         const [asa,setAsa] = useState({
             id:'',
             name:'',
             email:'',
             password:''
         })
       */
       
        /*
            asa.push({
                id:nanoid(),
                name:name,
                email:email,
                password:password
        
              })
              setAsa(asa)
              */


    }



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setLoad(res.data))
        console.log(load)

    }, [])




    useEffect(() => {

        const ada = load.filter((er) => er.name.toLowerCase().includes(filter.toLowerCase()))
        if (ada.length > 0) {
            setLoad(ada)
        }




    }, [filter])





    return (
        <Authen.Provider value={{ load, filter, setFilter, adana, setAdana, selectRef, minRef, maxRef, handle1, mail, pass, setMail, setPass, handle2, email, setEmail, setPassword, password, handle3, name, setName }}>
            {props.children}
        </Authen.Provider>
    )


}




