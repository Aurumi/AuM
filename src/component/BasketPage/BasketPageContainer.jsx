import React from "react"
import { connect } from "react-redux"
import BasketPage from "./BasketPage"




let BasketPageContainer =()=>{

    return <BasketPage/>
}

 let mapStateToProps =(state)=>{

    return {

        state,
    }
}

export default connect(mapStateToProps,{})(BasketPageContainer)