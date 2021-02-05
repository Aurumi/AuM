
const GET_DATA_CARD= "GET_DATA_CARD"

const ADD_PRODUCT_IN_BASKET ="ADD_PRODUCT_IN_BASKET"

const DELETE_PRODUCT_FROM_BASKET="DELETE_PRODUCT_FROM_BASKET"

let initalState = {


    dataCard:"",

    valueBasket:[],

    

}




let productPageReducer =(state=initalState , action)=>{


    switch(action.type){


        case GET_DATA_CARD:


        return {...state, dataCard:action.value}

        
        case ADD_PRODUCT_IN_BASKET:

        if({...state,dataCard:{...state.dataCard.id === action.id}}){

            // return{...state, valueBasket:[...state.valueBasket,{...state,dataCard:{...state.dataCard}}]}
            return{...state, valueBasket:[...state.valueBasket,{...state.dataCard}]}
        }

         case DELETE_PRODUCT_FROM_BASKET: 

             return {...state,valueBasket:state.valueBasket.filter(item=>item.id !== action.id)}
         



        


        default: return state

    }
    
}

export const deleteProductAc =(id)=>({type:DELETE_PRODUCT_FROM_BASKET,id})
export const addProductInBasketAc = (id)=>({type:ADD_PRODUCT_IN_BASKET,id})
export const  getDataCardAc =(value)=>({type:GET_DATA_CARD , value})



export default productPageReducer