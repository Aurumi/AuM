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

                                
                            
        < Route path="/Shop/womanScarves"  render={()=><Cards getDataCardAc={props.getDataCardAc} clearFilterFormAc={props.clearFilterFormAc} dataFormFilter={props.dataFilterFormWomanScarvesAc}  tittle={props.tittleShopPage.tittleScarves} element={props.womanScarves} switchOnAc={props.switchOnWomanScarvesAc}/>}></Route>
         < Route path="/Shop/womanHats" render={()=><Cards clearFilterFormAc={props.clearFilterFormWomanHatsAc}  dataFormFilter={props.dataFilterFormWomanHatsAc}  tittle={props.tittleShopPage.tittleHats} element={props.womanHats} switchOnAc={props.switchOnWomanHatsAc}/>}></Route>
         < Route path="/Shop/womanWrap" render={()=><Cards  clearFilterFormAc={props.clearFilterFormWomanWrapAc}  dataFormFilter ={props.dataFilterFormWomanWrapAc} tittle={props.tittleShopPage.tittleWrap} element={props.womanWrap} switchOnAc={props.switchOnWomanWrapAc}/>}></Route>
         < Route path="/Shop/womanGloves" render={()=><Cards  clearFilterFormAc={props.clearFilterFormWomanGlovesAc}  dataFormFilter ={props.dataFilterFormWomanGlovesAc} tittle={props.tittleShopPage.tittleGloves} element={props.womanGloves} switchOnAc={props.switchOnWomanGlovesAc}/>}></Route>
                           
               
            </div>
        </div>

    </div>
}

export default Shop;