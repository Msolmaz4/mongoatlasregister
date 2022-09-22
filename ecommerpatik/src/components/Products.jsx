import Card from "./Cart";
import React, { useContext} from "react";
import { Authen } from "../context/Auth";

const Products = () => {
  const { load } = useContext(Authen);
  console.log("card", load);
 
  return (
    <div>
      {load.map((er,index) => {
       
        return (
          
          <div key={index}>
            <Card 
            name={er.name}
           
            ad={er.address}
          

          />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
