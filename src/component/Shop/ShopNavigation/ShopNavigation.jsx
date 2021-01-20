import React from "react";
import { NavLink } from "react-router-dom";
import "./shopNavigation.css";


const ShopNavigation =()=>{

    return <div className="Shop-navigation__list">
       
       <ul>

           <li>
            <span className="Shop-navigation-tittle">Женское</span> 
            <ul className="link">
               <NavLink exact to="/Shop/womanHats"><li activeClassName="active" >Шапки</li></NavLink> 
               <NavLink exact to="/Shop/womanScarves"><li activeClassName="active" >Шарфы</li></NavLink> 
               <NavLink exact to="/Shop/womanWrap"><li activeClassName="active" >Платки</li></NavLink>
               <NavLink exact to="/Shop/womanGloves"><li activeClassName="active" >Перчатки</li></NavLink>
            </ul>
           </li>

           <li>
              <span className="Shop-navigation-tittle" >Мужское</span>
              <ul>
                <li>Шапки</li>
                <li>Шарфы</li>
                <li>Платки</li>
                <li>Перчатки</li>
            </ul>
           </li>
           <li>
              <span className="Shop-navigation-tittle" >Детское</span>
              <ul>
                <li>Шапки</li>
                <li>Шарфы</li>
                <li>Платки</li>
                <li>Перчатки</li>
            </ul>
           </li>
       </ul>

    </div>
}

export default ShopNavigation;
