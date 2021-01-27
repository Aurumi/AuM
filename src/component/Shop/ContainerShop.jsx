import React from "react";
import { connect } from "react-redux";
import { chekedPriceAc, chekedSeasonAc, chekedToogleAc, clickFilterAc, switchOnWomanHatsAc, switchOnWomanGlovesAc, switchOnWomanScarvesAc, switchOnWomanWrapAc, clearFilterFormAc } from "../../redux-store/shop-reducer";
import Shop from "./Shop";
// switchOnAc


const ContainerShop =(props)=>{

    return <Shop {...props}  clearFilterFormAc={props.clearFilterFormAc} clickFilter={props.clickFilterAc} switchOnWomanGlovesAc={props.switchOnWomanGlovesAc} switchOnWomanWrapAc={props.switchOnWomanWrapAc} switchOnWomanScarvesAc={props.switchOnWomanScarvesAc} switchOnWomanHatsAc={props.switchOnWomanHatsAc} chekedToogleAc={props.chekedToogleAc} chekedPriceAc={props.chekedPriceAc} chekedSeasonAc={props.chekedSeasonAc}/>
}



const mapStateToProps =(state)=>{

    return{

            // totalCards:state.shopPage.totalCards,
            // sizeCards:state.shopPage.sizeCards,
            Navigation:state.shopPage.shopNavigationMass,
            cards:state.shopPage.cards,
            womanHats:state.shopPage.womanHats,
            womanScarves:state.shopPage.womanScarves,
            womanWrap:state.shopPage.womanWrap,
            womanGloves:state.shopPage.womanGloves,
            tittleShopPage:state.shopPage.tittleShopPage,
            filter:state.shopPage.filter
    }
}





export default connect(mapStateToProps,{clearFilterFormAc,switchOnWomanScarvesAc,clickFilterAc ,switchOnWomanGlovesAc,switchOnWomanWrapAc,chekedToogleAc,switchOnWomanHatsAc,chekedPriceAc,chekedSeasonAc})(ContainerShop)