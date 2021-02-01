import React from "react";
import { connect } from "react-redux";
import { getDataCardAc } from "../../redux-store/productPage-reducer";
import {  clearFilterFormWomanGlovesAc,clearFilterFormWomanWrapAc,dataFilterFormWomanGlovesAc, dataFilterFormWomanWrapAc ,dataFilterFormWomanScarvesAc, switchOnWomanHatsAc, switchOnWomanGlovesAc, switchOnWomanScarvesAc, switchOnWomanWrapAc, clearFilterFormAc, dataFilterFormWomanHatsAc, clearFilterFormWomanHatsAc } from "../../redux-store/shop-reducer";
import Shop from "./Shop";
// switchOnAc


const ContainerShop =(props)=>{

    return <Shop {...props}  clearFilterFormAc={props.clearFilterFormAc} 
                             clearFilterFormWomanHatsAc ={props.clearFilterFormWomanHatsAc}
                             clearFilterFormWomanWrapAc={props.clearFilterFormWomanWrapAc}
                             clearFilterFormWomanGlovesAc={props.clearFilterFormWomanGlovesAc}
                             switchOnWomanGlovesAc={props.switchOnWomanGlovesAc}
                             switchOnWomanWrapAc={props.switchOnWomanWrapAc}
                             switchOnWomanScarvesAc={props.switchOnWomanScarvesAc}
                             switchOnWomanHatsAc={props.switchOnWomanHatsAc}  
                             dataFilterFormWomanScarvesAc={props.dataFilterFormWomanScarvesAc}
                             dataFilterFormWomanHatsAc={props.dataFilterFormWomanHatsAc}
                             dataFilterFormWomanWrapAc={props.dataFilterFormWomanWrapAc}
                             dataFilterFormWomanGlovesAc={props.dataFilterFormWomanGlovesAc}
                             getDataCardAc={props.getDataCardAc}
                             
                              />
}



const mapStateToProps =(state)=>{

    return{

            
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





export default connect(mapStateToProps,{
    clearFilterFormAc,
    clearFilterFormWomanHatsAc,
    clearFilterFormWomanWrapAc,
    clearFilterFormWomanGlovesAc,
    switchOnWomanScarvesAc,
    switchOnWomanGlovesAc,
    switchOnWomanWrapAc,
    switchOnWomanHatsAc,
    dataFilterFormWomanScarvesAc,
    dataFilterFormWomanGlovesAc,
    dataFilterFormWomanHatsAc,
    dataFilterFormWomanWrapAc,
    getDataCardAc,
})(ContainerShop)