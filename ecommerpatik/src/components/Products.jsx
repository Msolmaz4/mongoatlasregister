import Card from "./Cart";
import React, { useContext} from "react";
import { Authen } from "../context/Auth";
import {motion,AnimatePresence} from 'framer-motion'

const Products = () => {
  const { load } = useContext(Authen);
  console.log("card", load);
 //animate={{y:100}}
  return (
    <motion.div layout className="populer">
     <AnimatePresence>
     {load.map((er,index) => {
       
       return (
         
         <div key={index}>
           <Card 
           name={er.name}
          id={er.id}
           ad={er.address}
         

         />
         </div>
       );
     })}
     </AnimatePresence>
     
    </motion.div>
  );
};
export default Products;
