import React, { useEffect, useRef, useState } from"react";
import "./filtersidebar.css";
import {useSpring, animated,config } from 'react-spring';
import { useFormik } from 'formik';
import { Formik, Field, Form } from 'formik';
import { data } from "autoprefixer";
import ButtonAcсeptDeleteFilter from "../filterButton/FilterButton";
import FilterBurgerClose from "../filterBurgerClose/FilterBurgerClose";




const FilterSideBar =(props)=>{
  const [dataForm ,setDataForm] = useState({
    closeFilterSidebar:false,
    checked:false,
    value:null,
  })

  const animation = useSpring({ to:{transform:dataForm.closeFilterSidebar?"translateX(100%)":"translateX(0px)"} , from:{transform:dataForm.closeFilterSidebar?"translateX(0px)" :"translateX(100%)"}})

    

    const handleChange=(event)=>{

setDataForm({checked:event.target.checked,value:event.target.value})

    }
    
    const submit =(event)=>{
      props.chekedPriceAc(dataForm)
      event.preventDefault()
    }
    
    
    return<animated.div style={animation} className="filter-side-bar">

<FilterBurgerClose   setDataForm={setDataForm} />
  <form onSubmit={submit}>

 
<div className="radio-name">СЕЗОН</div>



<div className="radio-box">
  
<label>Весна</label>
<input className="radio-color"  onChange={handleChange}  type="radio" name="season" value="Весна"  ></input>

</div>
<div className="radio-box">
<label>Осень</label>
<input className="radio-color"  onChange={ handleChange} type="radio" name="season" value="Осень"  ></input>

</div>
<div className="radio-box">
<label>Зима</label>
<input className="radio-color" onChange={ handleChange}  type="radio" name="season"  value="Зима" ></input>

</div>
<div className="radio-box">
<label>Лето</label>
<input className="radio-color"  onChange={ handleChange} type="radio" name="season" value="Лето" ></input>

</div>

<ButtonAcсeptDeleteFilter   checked={dataForm.checked} clearFilterFormAc={props.clearFilterFormAc}/>

   </form>

   </animated.div>
}

export default FilterSideBar;