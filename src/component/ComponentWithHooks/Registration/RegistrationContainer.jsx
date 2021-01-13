
import React from "react"
import { connect } from "formik"
import {Registration} from "./Registration"

class RegistrationContainer extends React.Component{







    
    render(){

return <Registration/>

    }
}


const mapDispatchToProps =(state)=>{

return{

    state,

}
}




export default connect(mapDispatchToProps)(RegistrationContainer)