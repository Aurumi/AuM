import React from "react";
import { connect } from "react-redux";
import Basket from "./Basket";



let BasketComponent =(props)=>{

    return <Basket {...props}/>
}


let mapStateToProps =(state)=>{

    return {

        valueBasket:state.productPage.valueBasket

    }
}





export default connect(mapStateToProps,{})(BasketComponent)