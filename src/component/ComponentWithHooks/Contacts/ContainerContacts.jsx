
import React from "react";
import { connect } from "react-redux"
import { visibleAC } from "../../../redux-store/contact-reducer";
import Contactsss from "../Contacts/Contacts"


const ContainerContacts =(props)=>{
    
    return <Contactsss {...props} visibleAC={props.visibleAC}/> 
}



const mapStateToProps =(state)=>{
   
    return{
        People:state.contactsPage.People,
        visible:state.contactsPage.visible
    }
}




 

   export default connect(mapStateToProps,{visibleAC})(ContainerContacts)

 