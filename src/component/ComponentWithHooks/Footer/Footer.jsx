import React, { useRef, useState,  } from "react"
import {Transition} from 'react-spring/renderprops'
import "./footer.css";
import {animated, useSpring, useSprings, useTransition,config} from 'react-spring';
import instagram from "../../../image/socialIcons/Instagram_5.png";
import facebook from "../../../image/socialIcons/Facebook_5.png"
import youtube from "../../../image/socialIcons/Youtube_5.png"


const Footer = ()=>{

    
    
    const [items , setItems]= useState(false);
    const [items1 , setItems1]= useState(false);
    const [items2 , setItems2]= useState(false);

    

  const transitions = (items, className , text)=>{

    return  <Transition items={items}
     from = {{transform:"translateY(-35px)",opacity:0}} 
     enter={{transform:"translateY(0px)",opacity:1}} 
     leave={{transform:"translateY(-35px)",opacity:0}}>
    
    {items=>items&&(props=><div  style={props}  className={className}>
    < p  >{text}</p>
</div>  )}
</Transition>
  }
        
    const rotateee = (funct, items)=>{
        
        funct(!items)
    }
    

    return <footer data-aos="fade-up" className="footer">

<div className="adaptiv-footer">

    <div className="items">
  
     

      <div className="items__item">
      < div  onClick={()=>{rotateee(setItems,items)}} className={ (items)?" items__tittle active":"items__tittle "}  >Контакты</div>
      {transitions(items ,"items__text", "Контакты")}
              </div>
        
              <div className="items__item">
      < div  onClick={()=>{rotateee(setItems1,items1)}} className={ (items1)?" items__tittle active":"items__tittle "}>О нас</div>
      {transitions(items1 ,"items__text", "О нас")}
              </div>
            
              <div className="items__item">
      < div  onClick={()=>{rotateee(setItems2,items2)}} className={ (items2)?" items__tittle active":"items__tittle "}>Магазины</div>
      {transitions(items2 ,"items__text", "Магазины")}
              </div>
            
  
    </div>
</div>

        <div className="footer__columns">

            
        
         <div className="footer__column">
           <div className="footer__items">
              

                   
                   <div className=" footer__list">
                          <ul>
                              <li className="footer__tittle"><h1>About</h1> </li>
                              <li>About Us</li>
                              <li>Carrers</li>
                              <li>Corporate Sales</li>
                              <li>Where to Buy</li>

                          </ul>
                   </div>
               
           </div>


         </div>
         <div className="footer__column">

         <div className="footer__items">
            
              <div className=" footer__list">
                     <ul>
                         <li className="footer__tittle"><h1>Support</h1> </li>
                         <li>Contact</li>
                         <li>Returns</li>
                         <li>Warranty</li>
                         <li>Product Registration</li>
                         <li>Help</li>

                     </ul>
              </div>
          
      </div>
         </div>
         <div className="footer__column">
         <div className="footer__items">
              

                   
              <div className=" footer__list">
                     <ul>
                         <li className="footer__tittle"><h1>Legal</h1> </li>
                         <li>About Us</li>
                         <li>Carrers</li>
                         <li>Corporate Sales</li>
                         <li>Where to Buy</li>

                     </ul>
              </div>
          
      </div>
         </div>
         <div className="footer__column">
         <div className="footer__items">
              

                   
              <div className=" footer__list">
                     <ul>
                         <li className="footer__tittle"><h1>Other</h1> </li>
                         <li>About Us</li>
                         <li>Carrers</li>
                         <li>Corporate Sales</li>
                         <li>Where to Buy</li>

                     </ul>
              </div>
          
      </div>
         </div>


       
         </div>
         <div className="social-Network">
             <div className="social-Network__icons">

<div className="social-Network__img" >
                 <img src={instagram} alt=""/>
                 </div>
                 <div className="social-Network__img" >
                 <img  src={facebook} alt=""/>
                 </div>

                 <div className="social-Network__img" >
                 <img src={youtube} alt=""/>
                 </div>
                  </div>

                 
                  


                  
             <div className="social-Network__copyRight"> 
              <p>2020 Incase All Rights Reserved.</p> 
              <p>Site by SIDE-Commerce</p> 
             </div>
             
         </div>
         
    </footer>
}


export default Footer;