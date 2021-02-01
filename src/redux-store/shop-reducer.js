import womanHead1 from "../image/models/womanHeads/zara1.jpg"
import womanHead11 from "../image/models/womanHeads/zara11.jpg"
import womanHead2 from "../image/models/womanHeads/zara2.jpg"
import womanHead22 from "../image/models/womanHeads/zara22.jpg"
import womanHead3 from "../image/models/womanHeads/zara3.jpg"
import womanHead33 from "../image/models/womanHeads/zara33.jpg"
import womanHead4 from "../image/models/womanHeads/zara4.jpg"
import womanHead44 from "../image/models/womanHeads/zara44.jpg"
import womanHead5 from "../image/models/womanHeads/zara5.jpg"
import womanHead55 from "../image/models/womanHeads/zara55.jpg"
import womanScarves1 from "../image/models/womanScarves/zara1.jpg"
import womanScarves11 from "../image/models/womanScarves/zara11.jpg"
import womanScarves2 from "../image/models/womanScarves/zara2.jpg"
import womanScarves22 from "../image/models/womanScarves/zara22.jpg"
import womanScarves3 from "../image/models/womanScarves/zara3.jpg"
import womanScarves33 from "../image/models/womanScarves/zara33.jpg"
import womanScarves4 from "../image/models/womanScarves/zara4.jpg"
import womanScarves44 from "../image/models/womanScarves/zara44.jpg"
import womanScarves5 from "../image/models/womanScarves/zara5.jpg"
import womanScarves55 from "../image/models/womanScarves/zara55.jpg"
import womanScarves6 from "../image/models/womanScarves/zara6.jpg"
import womanScarves66 from "../image/models/womanScarves/zara66.jpg"
import womanWrap1 from "../image/models/womanWrap/zara1.jpg"
import womanWrap11 from "../image/models/womanWrap/zara11.jpg"
import womanWrap2 from "../image/models/womanWrap/zara2.jpg"
import womanWrap22 from "../image/models/womanWrap/zara22.jpg"
import womanWrap3 from "../image/models/womanWrap/zara3.jpg"
import womanWrap33 from "../image/models/womanWrap/zara33.jpg"
import womanWrap4 from "../image/models/womanWrap/zara4.jpg"
import womanWrap44 from "../image/models/womanWrap/zara44.jpg"
import womanWrap5 from "../image/models/womanWrap/zara5.jpg"
import womanWrap55 from "../image/models/womanWrap/zara55.jpg"
import womanGloves1 from "../image/models/womanGloves/zara1.jpg"
import womanGloves11 from "../image/models/womanGloves/zara11.jpg"
import womanGloves2 from "../image/models/womanGloves/zara2.jpg"
import womanGloves22 from "../image/models/womanGloves/zara22.jpg"

const SWITCHON_WOMAN_HATS ="SWITCHON_WOMAN_HATS";
 
const DATA_FILTER_FORM_WOMAN_SCARVES="DATA_FILTER_FORM_WOMAN_SCARVES"
const DATA_FILTER_FORM_WOMAN_HATS ="DATA_FILTER_FORM_WOMAN_HATS"
const DATA_FILTER_FORM_WOMAN_WRAP ="DATA_FILTER_FORM_WOMAN_WRAP"
const DATA_FILTER_FORM_WOMAN_GlOVES ="DATA_FILTER_FORM_WOMAN_GLOVES"


const SWITCHON_WOMAN_SCARVES="SWITCHON_WOMAN_SCARVES"
 const SWITCH_WOMAN_WRAP ="SWITCH_WOMAN_WRAP"
 const SWITCH_WOMAN_GLOVES="SWITCH_WOMAN_GLOVES"

 const CLEAR_FILTER_FORM="CLEAR_FILTER_FORM"
 const CLEAR_FILTER_FORM_WOMAN_HATS ="CLEAR_FILTER_FORM_WOMAN_HATS"
 const CLEAR_FILTER_FORM_WOMAN_WRAP ="CLEAR_FILTER_FORM_WOMAN_WRAP"
 const CLEAR_FILTER_FORM_WOMAN_GLOVES ="CLEAR_FILTER_FORM_WOMAN_GLOVES"

const initialState ={

 
   
    dataFilterForm:{
        
    },
   
    tittleShopPage:{
        
        tittleHats:"Шапки",
        tittleScarves:"Шарфы",
        tittleWrap:"Платки",
        tittleGloves:"Перчатки"

    },

      

    

womanHats:[
    
               {id:1, filter:false,img:womanHead1,img2:womanHead11, tittle:"Шапка белая", structure:"Шерсть", price:25, season:"Зима",switch:false},
               {id:2, filter:false,img:womanHead2,img2:womanHead22, tittle:"Шапка белая", structure:"Шерсть", price:23, season:"Осень",switch:false},
               {id:3, filter:false,img:womanHead3,img2:womanHead33, tittle:"Шапка белая", structure:"Шерсть", price:22, season:"Зима",switch:false},
               {id:4, filter:false,img:womanHead4,img2:womanHead44, tittle:"Шапка белая", structure:"Шерсть", price:21, season:"Лето",switch:false},
               {id:5, filter:false,img:womanHead5,img2:womanHead55, tittle:"Шапка белая", structure:"Шерсть", price:24, season:"Зима",switch:false},
               
                 
 ],

 womanScarves:[

    {id:1, filter:false,img:womanScarves1,img2:womanScarves11, tittle:"Шарф", structure:"Шерсть", price:25, season:"Весна",switch:false},
    {id:2, filter:false,img:womanScarves2,img2:womanScarves22, tittle:"Шарф", structure:"Шерсть", price:15, season:"Весна",switch:false},
    {id:3, filter:false,img:womanScarves3,img2:womanScarves33, tittle:"Шарф", structure:"Шерсть", price:25, season:"Осень",switch:false},
    {id:4, filter:false,img:womanScarves4,img2:womanScarves44, tittle:"Шарф", structure:"Шерсть", price:15, season:"Осень",switch:false},
    {id:5, filter:false,img:womanScarves5,img2:womanScarves55, tittle:"Шарф", structure:"Шерсть", price:25, season:"Зима",switch:false},
    {id:6, filter:false, img:womanScarves6,img2:womanScarves66, tittle:"Шарф", structure:"Шерсть", price:15, season:"Лето",switch:false},

 ],

 womanWrap:[
    {id:1, filter:false,img:womanWrap1,img2:womanWrap11, tittle:"Платок", structure:"Шерсть", price:25, season:"Зима",switch:false},
    {id:2, filter:false,img:womanWrap2,img2:womanWrap22, tittle:"Платок", structure:"Шерсть", price:25, season:"Зима",switch:false},
    {id:3, filter:false,img:womanWrap3,img2:womanWrap33, tittle:"Платок", structure:"Шерсть", price:25, season:"Зима",switch:false},
    {id:4, filter:false,img:womanWrap4,img2:womanWrap44, tittle:"Платок", structure:"Шерсть", price:25, season:"Зима",switch:false},
    {id:5, filter:false,img:womanWrap5,img2:womanWrap55, tittle:"Платок", structure:"Шерсть", price:25, season:"Зима",switch:false},
 ],

 womanGloves:[
    {id:1, filter:false,img:womanGloves1 ,img2:womanGloves11, tittle:"Платок", structure:"Шерсть", price:25, season:"Зима",switch:false},
    {id:2, filter:false,img:womanGloves2 ,img2:womanGloves22, tittle:"Платок", structure:"Шерсть", price:25, season:"Лето",switch:false},
 ]
        
}

let switchON =(items , id)=>{

    return items.map((item)=>{
        if(item.id===id){
            return {...item, switch:true}
        }
        return {...item, switch:false}
        
    })
    
}

let dataFilter =(items ,value , checked)=>{

    return items.map((item)=>{

        if( item.season === value && checked===true){

            return {...item,filter:false}
        
        }
        return  {...item,filter:true}
        
    })
}



const shopReducer =(state=initialState, action)=>{


        switch(action.type){

            case SWITCHON_WOMAN_HATS:
                return{...state,womanHats:switchON(state.womanHats , action.id) }

            case SWITCHON_WOMAN_SCARVES:

                return {...state,womanScarves:switchON(state.womanScarves , action.id)}
            
            case SWITCH_WOMAN_WRAP :

            return {...state,womanWrap:switchON(state.womanWrap, action.id)}

            case SWITCH_WOMAN_GLOVES:

            return {...state,womanGloves:switchON(state.womanGloves ,action.id)}

            





         case DATA_FILTER_FORM_WOMAN_SCARVES:
                   
         return {...state, womanScarves: dataFilter(state.womanScarves , action.values.value , action.values.checked)}
            
          case DATA_FILTER_FORM_WOMAN_HATS:

         return {...state, womanHats: dataFilter(state.womanHats , action.values.value , action.values.checked)}

         case DATA_FILTER_FORM_WOMAN_WRAP : 

          return {...state, womanWrap: dataFilter(state.womanWrap , action.values.value , action.values.checked)}

          case DATA_FILTER_FORM_WOMAN_GlOVES:

            return {...state, womanGloves: dataFilter(state.womanGloves , action.values.value , action.values.checked)}
                    

                    case CLEAR_FILTER_FORM : 

                    return {...state,womanScarves:state.womanScarves.map(item=>({...item,filter:false}))}
            
                    case CLEAR_FILTER_FORM_WOMAN_HATS:

                    return {...state,womanHats:state.womanHats.map(item=>({...item,filter:false}))}
                    
                    case CLEAR_FILTER_FORM_WOMAN_WRAP:

                    return {...state,womanWrap:state.womanWrap.map(item=>({...item,filter:false}))}

                    case CLEAR_FILTER_FORM_WOMAN_GLOVES:

                    return {...state,womanGloves:state.womanGloves.map(item=>({...item,filter:false}))}
                    
                   

                default: return state
        }
    
   
}


 export const switchOnWomanHatsAc =(id)=>({type:SWITCHON_WOMAN_HATS ,id})
 export const switchOnWomanScarvesAc =(id)=>({type:SWITCHON_WOMAN_SCARVES ,id})
 export const switchOnWomanWrapAc=(id)=>({type:SWITCH_WOMAN_WRAP, id})
 export const switchOnWomanGlovesAc=(id)=>({type:SWITCH_WOMAN_GLOVES,id})





 export const clearFilterFormAc =()=>({type:CLEAR_FILTER_FORM})
 export const clearFilterFormWomanHatsAc =()=>({type:CLEAR_FILTER_FORM_WOMAN_HATS})
 export const clearFilterFormWomanWrapAc =()=>({type:CLEAR_FILTER_FORM_WOMAN_WRAP})
 export const clearFilterFormWomanGlovesAc =()=>({type:CLEAR_FILTER_FORM_WOMAN_GLOVES})

 
 export const dataFilterFormWomanHatsAc =(values)=>({type:DATA_FILTER_FORM_WOMAN_HATS,values })
 export const dataFilterFormWomanWrapAc =(values)=>({type:DATA_FILTER_FORM_WOMAN_WRAP , values})
 export const dataFilterFormWomanScarvesAc =(values)=>({type:DATA_FILTER_FORM_WOMAN_SCARVES,values })
 export const dataFilterFormWomanGlovesAc =(values)=>({type:DATA_FILTER_FORM_WOMAN_GlOVES,values })

 
 
export default shopReducer;
