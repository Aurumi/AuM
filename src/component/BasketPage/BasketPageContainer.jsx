import React from "react"
import { connect } from "react-redux"
import { deleteProductAc } from "../../redux-store/productPage-reducer"
import BasketPage from "./BasketPage"




let BasketPageContainer =(props)=>{

    return <BasketPage {...props} deleteProductAc={props.deleteProductAc}/>

    
}

 let mapStateToProps =(state)=>{

    return {

        valueBasket:state.productPage.valueBasket
    }
}

export default connect(mapStateToProps,{deleteProductAc})(BasketPageContainer)