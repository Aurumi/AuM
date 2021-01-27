import "./filterButton.css"
import React from "react"



const ButtonAcсeptDeleteFilter =(props)=>{


    return  <div className = "buttonWrapper">
             <button disabled={props.checked ? false: true} type="submit">Применить</button>
            <button type="button"onClick={props.clearFilterFormAc}>Очистить </button> 
              
               </div>
    
  }


  export default ButtonAcсeptDeleteFilter