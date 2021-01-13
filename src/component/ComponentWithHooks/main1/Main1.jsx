import React, { useState } from "react";
import Main from "../Main/Main";
import fons3 from "../../../video/fons3.mp4"
import "./main1.css"
import {Spring} from 'react-spring/renderprops'
import Burger from "../Byrger/Burger";
import {Transition} from 'react-spring/renderprops'
import { NavLink } from "react-router-dom";

const Main1 =()=>{


    const [block, setBlock] = useState(false);
    const [block2 ,setBlock2] = useState(false)
    const [block3, setBlock3] = useState(false)



    return <div className="wallpaper">






<div className="contents">
<div  className="contents__preview">
<Spring from ={{opacity:0}} to={{opacity:1}} delay="1000">
{props=><div style={props}  className="tittle2" >AUR <span  >U</span>M</div> }
</Spring>
<video  loop autoPlay  muted className="video">
    <source  src = {fons3}/>
    
</video>
<div  className= "texts"></div>
</div>
<div  data-aos="fade-up" className="contents__woman">
    
    <div onMouseEnter={()=>setBlock(true)} onMouseLeave={()=>setBlock(false)} className="content-item"><div className="content-item_tittle" ><h1 >ДЛЯ НЕЕ</h1></div>
    

    <Transition items={block} from={{transform:"translateX(-740px)"}}
 enter={{transform:"translateX(0px)"}}
leave={{transfrom:"translateX(-740px)"}}
reverse={!block}
 
 >
     {items=>props=> items&&<div style={props} className="submenus">
         <ul className="submenus__list">
             <li>
                <NavLink to="/1233">Головные уборы</NavLink> 
             </li>
             <li>
             <NavLink to="/1233">Перчатки</NavLink> 
             </li>
             <li><NavLink to="/1233">Шапки</NavLink> </li>
             <li><NavLink to="/1233">Шарфы</NavLink> </li>
             
         </ul>
         </div>}
     </Transition> 
     </div>
    
   
   
</div>
<div  data-aos="fade-up" className="contents__man">

    
    
<div onMouseEnter={()=>setBlock2(true)} onMouseLeave={()=>setBlock2(false)} className="content-item"><div className="content-item_tittle" ><h1 >ДЛЯ НЕГО</h1></div>
    

    <Transition items={block2} from={{transform:"translateX(-740px)"}}
 enter={{transform:"translateX(0px)"}}
leave={{transfrom:"translateX(-740px)"}}
reverse={!block2}
 
 >
     {items=>props=> items&&<div style={props} className="submenus">
         <ul className="submenus__list">
             <li>
                <NavLink to="/1233">Головные уборы</NavLink> 
             </li>
             <li>
             <NavLink to="/1233">Перчатки</NavLink> 
             </li>
             <li><NavLink to="/1233">Шапки</NavLink> </li>
             <li><NavLink to="/1233">Шарфы</NavLink> </li>
             
         </ul>
         </div>}
     </Transition> 
     </div>
    
     
     
     
     
    
</div>
<div  data-aos="fade-up" className="contents__kids">
<div className="content-item"> 

<div onMouseEnter={()=>setBlock3(true)} onMouseLeave={()=>setBlock3(false)} className="content-item"><div className="content-item_tittle" ><h1 >ДЛЯ ДЕТЕЙ</h1></div>
    

    <Transition items={block3} from={{transform:"translateX(-740px)"}}
 enter={{transform:"translateX(0px)"}}
leave={{transfrom:"translateX(-740px)"}}
reverse={!block3}
 
 >
     {items=>props=> items&&<div style={props} className="submenus">
         <ul className="submenus__list">
             <li>
                <NavLink to="/1233">Головные уборы</NavLink> 
             </li>
             <li>
             <NavLink to="/1233">Перчатки</NavLink> 
             </li>
             <li><NavLink to="/1233">Шапки</NavLink> </li>
             <li><NavLink to="/1233">Шарфы</NavLink> </li>
             
         </ul>
         </div>}
     </Transition> 
     </div>
</div>
</div>
</div>

    </div>
    
    
}

export default Main1;