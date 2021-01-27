import "./filterBurgerClose.css";
import React from "react"


const FilterBurgerClose =(props)=>{


    return <div  className="Wrapper-filterBurgerCloser">
       
       <div onClick={ ()=>{props.setDataForm({closeFilterSidebar:true})}} className="filterBurgerCloser">

       </div>
    </div>
}

export default FilterBurgerClose