import React from "react";
import { connect } from "react-redux";
import { chekedPriceAc, chekedSeasonAc, chekedToogleAc, switchOnAc, switchOnWomanScarvesAc } from "../../redux-store/shop-reducer";
import Shop from "./Shop";
// switchOnAc


const ContainerShop =(props)=>{

    return <Shop {...props} switchOnWomanScarvesAc={props.switchOnWomanScarvesAc} switchOnAc={props.switchOnAc} chekedToogleAc={props.chekedToogleAc} chekedPriceAc={props.chekedPriceAc} chekedSeasonAc={props.chekedSeasonAc}/>
}



const mapStateToProps =(state)=>{

    return{

            // totalCards:state.shopPage.totalCards,
            // sizeCards:state.shopPage.sizeCards,
            Navigation:state.shopPage.shopNavigationMass,
            cards:state.shopPage.cards,
            womanHats:state.shopPage.womanHats,
            womanScarves:state.shopPage.womanScarves
    }
}





export default connect(mapStateToProps,{switchOnWomanScarvesAc,chekedToogleAc,switchOnAc,chekedPriceAc,chekedSeasonAc})(ContainerShop)