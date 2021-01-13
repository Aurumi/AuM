
import React, { useState } from "react";


import {Spring} from 'react-spring/renderprops'
import {Transition} from 'react-spring/renderprops'
import instagramm from '../../../image/socialIcons/Instagram_5.png'
import viber from '../../../image/socialIcons/viber.png'



import "../Contacts/contact.css";

const Contactsss =(props)=>{


    // const [visible1, setVisible] = useState(props.People.visible1);
    // const [visible2, setVisible2] = useState(props.People.visible2);
    // const [visible3, setVisible3] =useState(props.People.visible3);
    // const [visible4, setVisible4] = useState(props.People.visible4)

    //    const visible321 =(id)=>{
    //         props.visibleAC(id)
    //    }

    return <div className="wrapperContacts">

<div className="Container-Contact1">

    
    <Spring from={{transform:"translateX(-500px)"}} to={{transform:"translateX(0px)"}}>




{props=><div style={props} className="Container-Contact1__tittle"> <h1>КОМАНДА A&M</h1></div>}




    
    </Spring>

        <ul className="Container-Contact1__list">
        
            {props.People.map((people)=><li  className="Contact-item" onMouseEnter={()=>{props.visibleAC(people.id)}}   ><img src={people.img} alt=""/>

<Transition items={people.visible} from={{opacity:0}} enter={{opacity:1}} leave={{opacity:0}} delay="200"
>
{(items)=>props=>items&&<div style={props} className ="Contact-item__about">
    <ul>
        <li>{people.name}</li>
      <li> { people.profession}</li>
<li className="mobile"> {people.mobile}</li>
        <li ><img  src={instagramm} alt=""/>
        <img   src={viber} alt=""/>
        </li>
    </ul>
</div>}
</Transition>
</li>)}       
        </ul>
</div>
    </div> 
}

export default Contactsss;

