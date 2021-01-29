import React from "react";
import { connect } from "react-redux";
import { dataFilterFormWomanScarvesAc, switchOnWomanHatsAc, switchOnWomanGlovesAc, switchOnWomanScarvesAc, switchOnWomanWrapAc, clearFilterFormAc, dataFilterFormWomanHatsAc, clearFilterFormWomanHatsAc } from "../../redux-store/shop-reducer";
import Shop from "./Shop";
// switchOnAc


const ContainerShop =(props)=>{

    return <Shop {...props}  clearFilterFormAc={props.clearFilterFormAc} 
                             clearFilterFormWomanHatsAc ={props.clearFilterFormWomanHatsAc}
                             switchOnWomanGlovesAc={props.switchOnWomanGlovesAc}
                             switchOnWomanWrapAc={props.switchOnWomanWrapAc}
                             switchOnWomanScarvesAc={props.switchOnWomanScarvesAc}
                             switchOnWomanHatsAc={props.switchOnWomanHatsAc}  
                             dataFilterFormWomanScarvesAc={props.dataFilterFormWomanScarvesAc}
                             dataFilterFormWomanHatsAc={props.dataFilterFormWomanHatsAc}
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
    switchOnWomanScarvesAc,
    switchOnWomanGlovesAc,
    switchOnWomanWrapAc,
    switchOnWomanHatsAc,
    dataFilterFormWomanScarvesAc,
    dataFilterFormWomanHatsAc
})(ContainerShop)