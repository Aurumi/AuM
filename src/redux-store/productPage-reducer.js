
const GET_DATA_CARD= "GET_DATA_CARD"

let initalState = {


    dataCard:null

}




let productPageReducer =(state=initalState , action)=>{


    switch(action.type){


        case GET_DATA_CARD:


        return {...state, dataCard:action.value}




        default: return state

    }
    
}



export const  getDataCardAc =(value)=>({type:GET_DATA_CARD , value})


export default productPageReducer