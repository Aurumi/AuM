import React from "react"
import Filter from "../../Filter/Filter"
import "./shopTittle.css"



const ShopTittle =(props)=>{

    return  <ul className="Shop-tittle-filter">
    <li className="Shop-tittle">
    {props.tittle}
    </li>

    
    <li  className="Shop-filter"> 
    фильтр товаров
    </li>

    {/* <li onClick={ ()=>{setSwitches(true)}} >
        <Filter  />
    </li> */}

    
  

</ul> 
}

export default ShopTittle