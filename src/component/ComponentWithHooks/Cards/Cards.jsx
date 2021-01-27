import React, { useState } from "react";

import Filter from "../../Filter/Filter";
import FilterSideBar from "../../Filter/filterSideBar/filterSidebar";
import ShopTittle from "../../Shop/ShopTittle/ShopTittle";
import "./cards.css"



const Cards =(props)=>{

     const [toogleFilter, setToogleFilter] = useState(false)

     

     return <>
     
     {(toogleFilter)?

     <FilterSideBar clearFilterFormAc={props.clearFilterFormAc}  chekedPriceAc={props.chekedPriceAc}/> 
     
     :""}

    
    <div className="filter-wrapper">
    <li><ShopTittle  tittle={props.tittle}/></li> 
    <li onClick={()=>{setToogleFilter(true)}}><Filter /></li>
     </div> 
     

     
     
     
   {props.element.map((element)=>{
        
       if(element.filter===false){
        return <div onMouseEnter={()=>{props.switchOnAc(element.id)}}  className="Shop-cards__item">
                                   
        {(element.switch)?<img src={element.img2} alt=""/>:<img src={element.img} alt=""/>} 
         <div className="Shop-cards__text">
    <p>{element.tittle}</p>
    <p>{element.structure}</p>
    <p>{element.price}</p>
         </div> 
        
        
    </div> 

       }
  

    })}
   

</>
}

export default Cards;






{/* <div className="square">
         <div style={{backgroundColor:element.color1}} className="square__1"></div>
         <div style={{backgroundColor:element.color2}} className="square__2"></div>
         <div className="square__3"></div>
     </div> */}
     {/* <div className="Shop-cards__button">3123 </div> */}