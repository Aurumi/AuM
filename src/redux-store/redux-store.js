import { combineReducers,createStore} from "redux";
// import cardReducer from "./cards-reducer";
import contactReducer from "./contact-reducer";
import productPageReducer from "./productPage-reducer";
import registrationReducer from "./registration-reducer";
import shopReducer from "./shop-reducer";



let reducerss = combineReducers({

    registrationPage:registrationReducer,
    contactsPage:contactReducer,
    shopPage:shopReducer,
    productPage:productPageReducer
    // cards:cardReducer
    
})





let store = createStore(reducerss)


export default store;
