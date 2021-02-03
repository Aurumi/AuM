import React from "react"
import { Redirect, Route } from "react-router-dom"
import Header from "../Header/Header"

import "./flex.css"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"
import About from "./About/About"
import OurVideo from "./OurVideo/OurVideo"
import Main1 from "./main1/Main1"
import Registration from "./Registration/Registration"


import Contactsss from "./Contacts/Contacts"
import Contacts from "./Contacts/ContainerContacts"
import Shop from "../Shop/ContainerShop"
import ProductPageContainer from "../ProductPage/ProductPageContainer"
import BasketPageContainer from "../BasketPage/BasketPageContainer"




const Bycicle = (props)=>{

  
  
    return <div className="wrapper">
         
            <Header/>
            <div> 
            <Route path="/Basket" render={()=><BasketPageContainer/>}></Route>
            <Route path="/123" render={()=><ProductPageContainer/>}></Route>
              <Route path="/Shop" render={()=><Shop/>}></Route>
              <Route path="/Contacts" render={()=><Contacts/>}></Route>
            <Route path="/ZARA" render = {()=><OurVideo/>}></Route>  
             <Route path="/registration" render ={()=><Registration/>}></Route>  
                <Route path="/main" render = {()=><Main1/>}></Route>  
              <Route path="/about" render = {()=><About/>}></Route>
              <Redirect from ="/" to="/main"></Redirect>
             </div>
            <Footer />
           
        
    </div>
  
}

export default Bycicle



