import React, { useState } from "react";
import "./Shop.css";
import Filter from "../Filter/Filter";
import FilterSideBar from "../Filter/filterSideBar/filterSidebar";
import { Route, Switch } from "react-router-dom"
import Cards from "../ComponentWithHooks/Cards/Cards"
import ShopNavigation from "./ShopNavigation/ShopNavigation";


const Shop =(props)=>{

const [switches, setSwitches] =useState(false)




    return<div className="Shop-wallpaper">


        <div className="Shop-navigation">

            <ShopNavigation/>

            
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

                           <Switch>

                           < Route path="/Shop/womanScarves" render={()=><Cards element={props.womanScarves} switchOnAc={props.switchOnWomanScarvesAc}/>}></Route>
                          < Route path="/Shop/womanHats" render={()=><Cards element={props.womanHats} switchOnAc={props.switchOnAc}/>}></Route>
                           </Switch>
                            
               
            </div>
        </div>

    </div>
}

export default Shop;