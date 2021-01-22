import React, { useEffect, useRef, useState } from"react";
import "./filtersidebar.css";
import {useSpring, animated,config } from 'react-spring';
import { useFormik } from 'formik';




const ButtonAcсeptDeleteFilter =(props)=>{

  

  return  <div className = "buttonWrapper">
           <button disabled = { props.cheked ? true :false } type = "submit"> Применить </button>
           <button> Удалить все </button>    
             </div>
  
}

const FilterSideBar =(props)=>{


  
const [checked , setChecked] =useState(false)
const inpurRefPrice25=useRef(null)
// const inpurRefPrice1 = inpurRefPrice25.current
console.log(inpurRefPrice25.current.value)
const inpurRefPrice15=useRef(null)
// const inpurRef2=useRef(null)

// useEffect(()=>{

//   return ()=>{

//      const inpurRefPrice1 = inpurRefPrice25.current.checked
//      const inpurRefPrice2 = inpurRefPrice15.current.checked
//      const Refs = [inpurRefPrice1 ,inpurRefPrice2]
//   // setChecked(Refs)
    
    
//   }
 
// })



  const animation = useSpring({ to:{transform:"translateX(0px)"} , from:{transform:"translateX(110%)"}})
  const formik =useFormik({

    initialValues:{

      price:{
        priceOne:"25",
        priceTwo:"15",
      },

      seasons:{
        spring:"Весна",
        autumn:"Осень",
        winter:"Зима",
        summer:"Лето"

      },
      
      
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
<input type="text"  ></input>
  <form onSubmit={formik.handleSubmit}>

 <div className="radio-name">ЦЕНА</div>
 <div className="radio-box">
<label> 25 </label>
<input className="radio-color" ref={inpurRefPrice25}  type="radio" name="price" onChange={formik.handleChange} value={formik.values=25} ></input>
</div>

<div className="radio-box">
<label>15</label>
<input className="radio-color" ref ={inpurRefPrice15}   type="radio" name="price" onChange={formik.handleChange} value={formik.values=15} ></input>

</div>
<div className="radio-name">СЕЗОН</div>
<div className="radio-box">
<label>Весна</label>
<input className="radio-color" type="radio" name="season" onChange={formik.handleChange} value={formik.values ="Весна"} ></input>

</div>
<div className="radio-box">
<label>Осень</label>
<input className="radio-color"  type="radio" name="season" onChange={formik.handleChange} value={formik.values="Осень"} ></input>

</div>
<div className="radio-box">
<label>Зима</label>
<input className="radio-color" type="radio" name="season" onChange={formik.handleChange} value={formik.values="Зима"} ></input>

</div>
<div className="radio-box">
<label>Лето</label>
<input className="radio-color" type="radio" name="season" onChange={formik.handleChange} value={formik.values="Лето"} ></input>

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


 

<ButtonAcсeptDeleteFilter  checked={checked}/>

  </form>


  
    </animated.div>
}

export default FilterSideBar;