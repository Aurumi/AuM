import React from "react";
import "./registration.css";
import {Spring} from 'react-spring/renderprops'
import { useFormik } from "formik";
import Facebook from "../../../image/socialIcons/Facebook_5.png"
import Google from "../../../image/socialIcons/google.png"
import { NavLink } from "react-router-dom";

const Registration =()=>{


const formik = useFormik({
    
    initialValues:{
        email:" ",
        login:" ",
        password:null
},

onSubmit:values=>{
    console.log(values)
}

});



    return <div className="wrapperRegistration">

<Spring from={{transform:"translateY(-600px)"}} to={{transform:"translateY(0)"}} delay="400">

{props=><div style={props} className="Sign-in">


<div className="Form">




<form className="forms" onSubmit={formik.handleSubmit}>
    <label> Sign In</label>

<input  className="inputStyle" id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />  

<input  className="inputStyle" id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/> 

<div className="button">
<button  className="button1" type="submit">SUBMIT</button>

</div>
<label className="label"> or login with</label>
<div className="anySign">

<div className="anySign__item"><NavLink to="/123"><img src={Facebook} alt=""/></NavLink></div>
<div className="anySign__item"><NavLink to="/243"><img src={Google} alt=""/></NavLink></div>
    
</div>
</form>




</div>

</div>}

</Spring>
           
    </div>
}




export default Registration;