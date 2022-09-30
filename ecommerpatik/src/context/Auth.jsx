import axios from "axios";
import React, { createContext, useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

export const Authen = createContext();

export const AuthenProvider = (props) => {
  const [load, setLoad] = useState([]);
  const [adana, setAdana] = useState(false);
  const [filter, setFilter] = useState();
  //basket 
  const [basket,setBasket] =useState([])

  const add = (id)=>{
    //olup olmadigini kontrol edeir
    console.log(id)

  }




  const [asal, setAsal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const yol = useNavigate();
  const selectRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  const handle1 = (e) => {
    if (minRef.current.value < 0){
      return alert(" min sifirdan buyuk olmak yorundadir");
    }
    try {
      console.log(
        minRef.current.value,
        maxRef.current.value,
        selectRef.current.value
      );
    } catch (error) {
      alert("navige");
    }
  };

  const handle2 = async(email,pass) => {
    
    if(asal.email === email && asal.password === pass){
        console.log("de", email, pass);
     await   setAdana(true)
     
     yol('/')
    }
    
    
  };

  const handle3 = async (name, email, password) => {

    if (name && email && password) {
       await  setAsal({
            name: name,
            email: email,
            password: password,
          });
          yol('/login')
    
    }
  
  
    console.log("auth", asal);
  };

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



   const Add = ()=>{

   }           

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setLoad(res.data));
    console.log(load)
  }, []);

  useEffect(() => {
    const ada = load.filter((er) =>
      er.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (ada.length > 0) {
      setLoad(ada);
    }
  }, [filter]);

  return (
    <Authen.Provider
      value={{
        load,
        filter,
        setFilter,
        adana,
        setAdana,
        selectRef,
        minRef,
        maxRef,
        handle1,
        Add,
  add,
        handle2,
        handle3,
      }}
    >
      {props.children}
    </Authen.Provider>
  );
};
