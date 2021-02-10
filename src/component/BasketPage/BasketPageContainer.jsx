import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteProductAc } from "../../redux-store/productPage-reducer"
import BasketPage from "./BasketPage"




let BasketPageContainer =(props)=>{

    let arr=props.valueBasket
    let sum = 0
     for(var obj in arr ){  
 
         sum +=arr[obj].price
     }

    return <BasketPage {...props} sum={sum}  deleteProductAc={props.deleteProductAc}/>

    
}

 let mapStateToProps =(state)=>{

    return {

        valueBasket:state.productPage.valueBasket
    }
}

export default connect(mapStateToProps,{deleteProductAc})(BasketPageContainer)