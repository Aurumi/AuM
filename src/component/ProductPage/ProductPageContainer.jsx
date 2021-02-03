
import React from "react"
import { connect } from "react-redux"
import { addProductInBasketAc } from "../../redux-store/productPage-reducer"
import ProductPage from "./ProductPage"


let ProductPageContainer =(props)=>{


    return <ProductPage {...props} addProductInBasketAc={props.addProductInBasketAc}/>


}

let mapStateToProps =(state)=>{


    return {
       
        dataCard:state.productPage.dataCard


    }
}





export default connect(mapStateToProps,{addProductInBasketAc})(ProductPageContainer)
