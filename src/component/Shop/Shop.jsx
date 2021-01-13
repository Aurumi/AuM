import React, { useState } from "react";
import "./Shop.css";
import filterImg from "../../image/filter/filter.JPG"
import Filter from "../Filter/Filter";
// import  "../../image/models/womanHeads/3.jpg"
import {Transition} from 'react-spring/renderprops'
import FilterSideBar from "../Filter/filterSideBar/filterSidebar";

import { Route } from "react-router-dom"
import Registration from "../ComponentWithHooks/Registration/Registration";
import Cards from "../ComponentWithHooks/Cards/Cards"


const Shop =(props)=>{

const [switches, setSwitches] =useState(false)




    return<div className="Shop-wallpaper">


        <div className="Shop-navigation">

            <ul className="Shop-navigation__list">

           { props.Navigation.map((navigation)=>{

   return <li ><span className="Shop-navigation__mainTittle">{navigation.mainTittle}</span>
        <ul>

       <li><span className="Shop-navigation__tittle">{navigation.tittleFirst}</span>
        
        <ul>
            <li>
               {navigation.liFirst}
            </li>
            <li>
                {navigation.liSecond}
             </li>
            <li></li>
        </ul>
        </li>
           <li><span className="Shop-navigation__tittle">{navigation.tittleSecond}</span>
                        <ul>
                         <li>{navigation.liThird}</li>
                            <li>{navigation.liFourth}</li>
                            
                        </ul>
                    </li>

            <li><span className="Shop-navigation__tittle">{navigation.tittleThird}</span>
         <ul>
         <li>{navigation.liFifth}</li>
        <li>{navigation.lisixth}</li>
             </ul>       

             
            </li>



        </ul>

</li>
})}
                
            </ul>
        </div>




        <div className="Shop-view">
            {switches?<FilterSideBar {...props}  chekedToogleAc={props.chekedToogleAc} chekedPriceAc={props.chekedPriceAc} chekedSeasonAc={props.chekedSeasonAc}/>:<div></div>}
           
                <ul className="Shop-tittle-filter">
                    <li className="Shop-tittle">
                    Шапки
                    </li>

                    
                    <li  className="Shop-filter"> 
                    фильтр и сортировка
                    </li>

                    <li onClick={ ()=>{setSwitches(true)}} >
                        <Filter  />
                    </li>
                  

                </ul>        

            <div className="Shop-cards">

                            <Cards {...props}/>



                    {/* {props.cards.map((element)=>{

                          if(element.cheked) {
                            return  <div onMouseEnter={()=>{props.switchOnAc(element.id)}}  className="Shop-cards__item">
                            
                            
                            {(element.switch===false)?<img src={element.img2} alt=""/>:<img src={element.img} alt=""/>} 
                             <div className="Shop-cards__text">
                     <p>{element.tittle}</p>
                     <p>{element.structure}</p>
                     <p>{element.price}</p>
                             </div> */}
                             {/* <div className="square">
                                 <div style={{backgroundColor:element.color1}} className="square__1"></div>
                                 <div style={{backgroundColor:element.color2}} className="square__2"></div>
                                 <div className="square__3"></div>
                             </div> */}
                             {/* <div className="Shop-cards__button">3123 </div> */}
                             
                         {/* </div>  */}
                          {/* } */}
                           

                        
                          

{/*                 
                    })} */}
               
            </div>
        </div>

    </div>
}

export default Shop;