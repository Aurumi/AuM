import React, { useState } from "react";
import "./Shop.css";
import { Route } from "react-router-dom"
import Cards from "../ComponentWithHooks/Cards/Cards"
import ShopNavigation from "./ShopNavigation/ShopNavigation";


const Shop =(props)=>{


    return<div className="Shop-wallpaper">


        <div className="Shop-navigation"> <ShopNavigation/></div>


        <div className="Shop-view">
            

            <div className="Shop-cards">

                                
                            
        < Route path="/Shop/womanScarves"  render={()=><Cards clearFilterFormAc={props.clearFilterFormAc} dataFormFilter={props.dataFilterFormWomanScarvesAc}  tittle={props.tittleShopPage.tittleScarves} element={props.womanScarves} switchOnAc={props.switchOnWomanScarvesAc}/>}></Route>
         < Route path="/Shop/womanHats" render={()=><Cards clearFilterFormAc={props.clearFilterFormWomanHatsAc}  dataFormFilter={props.dataFilterFormWomanHatsAc}  tittle={props.tittleShopPage.tittleHats} element={props.womanHats} switchOnAc={props.switchOnWomanHatsAc}/>}></Route>
         < Route path="/Shop/womanWrap" render={()=><Cards  filter={props.filter} clickFilter={props.clickFilter} tittle={props.tittleShopPage.tittleWrap} element={props.womanWrap} switchOnAc={props.switchOnWomanWrapAc}/>}></Route>
         < Route path="/Shop/womanGloves" render={()=><Cards  filter={props.filter} clickFilter={props.clickFilter} tittle={props.tittleShopPage.tittleGloves} element={props.womanGloves} switchOnAc={props.switchOnWomanGlovesAc}/>}></Route>
                           
               
            </div>
        </div>

    </div>
}

export default Shop;