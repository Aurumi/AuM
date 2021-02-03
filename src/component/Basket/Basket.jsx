import React from "react";
import bsk from "./basket.module.css";
import basket from "../../image/basketIcon/123.jpg"



let Basket =(props)=>{
console.log(props.valueBasket)
console.log(props.valueBasket.length)
    return <div>

     <img src={basket}/>
     {(props.valueBasket.length===0)?"":props.valueBasket.length}
   


     </div>
}

export default Basket;