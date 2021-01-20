import React from"react";
import "./filtersidebar.css";
import {useSpring, animated,config } from 'react-spring';
import { useFormik } from 'formik';



const FilterSideBar =(props)=>{

  const animation = useSpring({ to:{transform:"translateX(0px)"} , from:{transform:"translateX(110%)"}})
  const formik =useFormik({

    initialValues:{

      
    },

    onSubmit:(values)=>{
   console.log(values)
   props.chekedPriceAc(values)
    }


 })
  
    const constructorSideBar =(label,nameInput,onChange)=>{

        return <>
              <div className="radio-box">
             <label >{label}</label>
             <input className="radio-color" type="radio" name={nameInput}  onChange={onChange}></input>
             </div>
        </>
    }

    
    
    return<animated.div style={animation} className="filter-side-bar">

  <form onSubmit={formik.handleSubmit}>

 <div className="radio-name">ЦЕНА</div>
 <div className="radio-box">
<label>25</label>
<input className="radio-color" type="radio" name="price" onChange={formik.handleChange} value={formik.values=25} ></input>
</div>

<div className="radio-box">
<label>15</label>
<input className="radio-color" type="radio" name="price" onChange={formik.handleChange} value={formik.values=15} ></input>

</div>
<div className="radio-name">СЕЗОН</div>
<div className="radio-box">
<label>Весна</label>
<input className="radio-color" type="radio" name="season" onChange={formik.handleChange} value={formik.values=15} ></input>

</div>
<div className="radio-box">
<label>Осень</label>
<input className="radio-color" type="radio" name="season" onChange={formik.handleChange} value={formik.values=15} ></input>

</div>
<div className="radio-box">
<label>Зима</label>
<input className="radio-color" type="radio" name="season" onChange={formik.handleChange} value={formik.values=15} ></input>

</div>
<div className="radio-box">
<label>Лето</label>
<input className="radio-color" type="radio" name="season" onChange={formik.handleChange} value={formik.values=15} ></input>

</div>





     
{/* <div className="radio-name">ЦЕНА</div>
{constructorSideBar(25,"price",(e)=>{props.chekedPriceAc(e.target.checked, 25)})}
{constructorSideBar(15,"price",(e)=>{props.chekedPriceAc(e.target.checked, 15)})}

  
<div className="radio-name">CОСТАВ</div>
{constructorSideBar("Шерсть","structure",(e)=>{props.chekedToogleAc(e.target.checked, "Шерсть 80%/ polisteren20%")})}
{constructorSideBar("Хлопок","structure",(e)=>{props.chekedToogleAc(e.target.checked, "Хлопок 80%/ polisteren20%")})}


<div className="radio-name">СЕЗОН</div>
{constructorSideBar("Весна","season",(e)=>{props.chekedSeasonAc(e.target.checked, "весна")})}
{constructorSideBar("Лето","season",(e)=>{props.chekedSeasonAc(e.target.checked, "лето")})}
{constructorSideBar("Осень","season",(e)=>{props.chekedSeasonAc(e.target.checked,"осень")})}
{constructorSideBar("Зима","season",(e)=>{props.chekedSeasonAc(e.target.checked, "зима")})} */}


 

<button type="submit">Применить</button>

  </form>


  
    </animated.div>
}

export default FilterSideBar;