import React, { useState } from "react"
import { connect } from "react-redux"
import { deleteProductAc } from "../../redux-store/productPage-reducer"
import BasketPage from "./BasketPage"




let BasketPageContainer =(props)=>{

     let [sum , setSum] = useState(0)
     let [arrayProduct,setSarrayProduct] =useState(props.valueBasket)

        for(var obj in arrayProduct ){  

        sum +=arrayProduct[obj].price
    }


    return <BasketPage {...props} sum={sum} deleteProductAc={props.deleteProductAc}/>

    
}

 let mapStateToProps =(state)=>{

    return {

        valueBasket:state.productPage.valueBasket
    }
}

export default connect(mapStateToProps,{deleteProductAc})(BasketPageContainer)