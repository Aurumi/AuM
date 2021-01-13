import React from "react";
import "./cards.css"



const Cards =(props)=>{

     return <>
   {props.cards.map((element)=>{
       if(element.cheked){
        return <div onMouseEnter={()=>{props.switchOnAc(element.id)}}  className="Shop-cards__item">
                                       
        {(element.switch===false)?<img src={element.img2} alt=""/>:<img src={element.img} alt=""/>} 
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