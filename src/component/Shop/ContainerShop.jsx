import React from "react";
import { connect } from "react-redux";
import { chekedPriceAc, chekedSeasonAc, chekedToogleAc, switchOnAc } from "../../redux-store/shop-reducer";
import Shop from "./Shop";
// switchOnAc


const ContainerShop =(props)=>{

    return <Shop {...props} switchOnAc={props.switchOnAc} chekedToogleAc={props.chekedToogleAc} chekedPriceAc={props.chekedPriceAc} chekedSeasonAc={props.chekedSeasonAc}/>
}



const mapStateToProps =(state)=>{

    return{

            // totalCards:state.shopPage.totalCards,
            // sizeCards:state.shopPage.sizeCards,
            Navigation:state.shopPage.shopNavigationMass,
            cards:state.shopPage.cards,
            womanHats:state.shopPage.womanHats
    }
}





export default connect(mapStateToProps,{chekedToogleAc,switchOnAc,chekedPriceAc,chekedSeasonAc})(ContainerShop)