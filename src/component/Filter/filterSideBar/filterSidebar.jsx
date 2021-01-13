import React from"react";
import "./filtersidebar.css";



const FilterSideBar =(props)=>{



    const constructorSideBar =(label,nameInput,onChange)=>{
        return <>
              <div className="radio-box">
             <label >{label}</label>
             <input className="radio-color" type="radio" name={nameInput}  onChange={onChange}></input>
             </div>
        </>
    }

    
    
    return<div className="filter-side-bar">

  <form>
     
<div className="radio-name">ЦЕНА</div>
{constructorSideBar(25,"price",(e)=>{props.chekedPriceAc(e.target.checked, 25)})}
{constructorSideBar(15,"price",(e)=>{props.chekedPriceAc(e.target.checked, 15)})}

  
<div className="radio-name">CОСТАВ</div>
{constructorSideBar("Шерсть","structure",(e)=>{props.chekedToogleAc(e.target.checked, "Шерсть 80%/ polisteren20%")})}
{constructorSideBar("Хлопок","structure",(e)=>{props.chekedToogleAc(e.target.checked, "Хлопок 80%/ polisteren20%")})}


<div className="radio-name">СЕЗОН</div>
{constructorSideBar("Весна","season",(e)=>{props.chekedSeasonAc(e.target.checked, "весна")})}
{constructorSideBar("Лето","season",(e)=>{props.chekedSeasonAc(e.target.checked, "лето")})}
{constructorSideBar("Осень","season",(e)=>{props.chekedSeasonAc(e.target.checked,"осень")})}
{constructorSideBar("Зима","season",(e)=>{props.chekedSeasonAc(e.target.checked, "зима")})}


 {/* <div className="radio-name">ЦЕНА</div>
<div className="radio-box">
<label >25р</label>
<input className="radio-color" type="radio" name="price"  onChange={(e)=>{props.chekedPriceAc(e.target.checked, 25)}}></input>
</div> */}


  </form>



    </div>
}

export default FilterSideBar;