import React, { useState } from "react";
import "./header.css"
import logo from "../../image/logo.jpg"
import { NavLink } from "react-router-dom";
import Burger from "../ComponentWithHooks/Byrger/Burger";




const Header = (props)=>{


    

    return  <header className="header">
                
                
                 <nav className="header__navigation">
                     <div className="header__row">
                     
                         {/* <div className="header__element logo">
                             <img src={logo} alt=""/>
                         </div> */}
                        
                         <Burger/>
                         
                         
                         <div className="header__element header__element_1"> <NavLink to= "/about" >О НАС </NavLink> </div>
                        <div className="header__element header__element_1"><NavLink to= "/Contacts" > КОНТАКТЫ </NavLink> </div>
                        <div className="header__element header__element_1"><NavLink to= "/Shop" > МАГАЗИН </NavLink> </div>
                        <div className="header__element header__element_1"><NavLink to= "/registration" > РЕГИСТРАЦИЯ </NavLink> </div>
                        <div className="header__element header__element_1"><NavLink to= "/registration" > РЕГИ</NavLink> </div>
                        
                        
                    </div>
                    
                 </nav>
                 
             </header>
}

export default Header