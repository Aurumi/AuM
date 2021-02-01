
import React from "react"
import { connect } from "react-redux"
import ProductPage from "./ProductPage"


let ProductPageContainer =(props)=>{


    return <ProductPage {...props}/>


}

let mapStateToProps =(state)=>{

    
    return {
       
        dataCard:state.productPage.dataCard


    }
}





export default connect(mapStateToProps,{})(ProductPageContainer)
