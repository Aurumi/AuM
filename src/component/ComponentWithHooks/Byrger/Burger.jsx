import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "react-spring/renderprops";
import "./burger.css"


const Burger = ()=>{


    let [editMode, setEditMode] = useState(false);

  

    const activated=()=>{
        console.log(editMode)
         setEditMode(!editMode)

    }

    return <>
    
    <div  className={ (editMode) ? "Burger cross" :"Burger"} onClick={activated}>
        
    <span> </span>

</div>

  <Transition items={editMode} from={{transform:"translateY(-305px)"}}
 enter={{transform:"translateY(0px)"}}
leave={{transfrom:"translateY(-305px)"}}
reverse={!editMode}
 
 >
     {items=>props=> items&&<div style={props} className="Burger-active">
    <div className="Burger-active__List">
             <ul className="Burger-active__row">
             <li  className="links"><NavLink to="ssss"> О НАС</NavLink></li> 
             <li  className="links"><NavLink to="ssss"> КОНТАКТЫ</NavLink></li> 
             <li  className="links"><NavLink to="ssss"> МАГАЗИН</NavLink></li> 
             <li  className="links"><NavLink to="ssss"> РЕГИСТРАЦИЯ</NavLink></li> 
             </ul>
            
     </div>
     
     </div>}
     </Transition> 


</>


    







//     const activeMode = ()=>{
// console.log("activated")
//         setEditMode(false);
//     }
    
//     const deactivatedMode = ()=>{
// console.log('diactivated')
//         setEditMode(true);
//     }

    

    //     if(editMode) return  <div onClick={activeMode} className="Burger">
        
    //     <span> </span>
    
    // </div>

     





    //  <Transition items={toggle} from={{transform:"translateY(-35px)"}}
    // enter={{transform:"translateY(0px)"}} leave={{transform:"translateY(-35px)"}}
    //  >
    // {items=>props=> items&& <div style={props} className="burger__list">
        
        


//         
   
    
                            
        
}                 
    


export default Burger;