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


const SWITCHON_WOMAN_HATS ="SWITCHON_WOMAN_HATS";
 const CHEKEDTOOGLE ="CHEKEDTOOGLE"
const DATA_FILTER_FORM="DATA_FILTER_FORM"
const CHEKEDSELL="CHEKEDSELL"
const CHEKEDSEASON ="CHEKEDSEASON"
const SWITCHON_WOMAN_SCARVES="SWITCHON_WOMAN_SCARVES"
 const SWITCH_WOMAN_WRAP ="SWITCH_WOMAN_WRAP"
 const SWITCH_WOMAN_GLOVES="SWITCH_WOMAN_GLOVES"
 const SWITCH_MAN_HATS="SWITCH_MAN_HATS"
 const CLICK_FILTER ="CLICK_FILTER"

 const CLEAR_FILTER_FORM="CLEAR_FILTER_FORM"

const initialState ={

 
   
    dataFilterForm:{
        
    },
    //  shopNavigationMass :[

    //     {mainTittle:"Мужское",
    //     tittleFirst:"Головные уборы", 
    //     tittleSecond:"Перчатки", 
    //     tittleThird:"Шарфы" ,
    //     liFirst:"Кепки", 
    //     liSecond:"Шапки",
    //     liThird:"Кожа",
    //     liFourth:"Нитка",
    //     liFifth:"Кашне",
    //     lisixth:"Тонкие"
    // }

    //     ,{mainTittle:"Женское",
    //      tittleFirst:"Головные уборы",
    //     tittleSecond:"Перчатки",
    //     tittleThird:"Шарфы" ,
    //     liFirst:"Шапки", 
    //     liSecond:"Шляпы",
    //     liThird:"Береты",
    //     liFourth:"Кожа",
    //     liFifth:"Ткань",
        

    //     }
    //     ,{mainTittle:"Детское"
    //     ,tittleFirst:"Головные уборы"
    //     , tittleThird:"Шарфы" 
    //     ,tittleSecond:"Перчатки" 
    //     , liFirst:"Ткань"
    //     , liSecond:"Кожа",}


    // ],

    // cards:[{id:1,cheked:false, img:womanHead1, img2:womanHead11, tittle:"Шапка белая с подкладкой",structure:" Шерсть 80%/ polisteren20%",color1:"black",color2:"red" ,color3:"wheat",price:25,switch:true, season:"лето"} ,
    //     {id:2, cheked:false, img:womanHead2,img2:womanHead22 ,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/polisteren20%",color1:"black",color2:"red",color3:"wheat",price:25,switch:true,season:"лето"},
    //     {id:3, cheked:false,img:womanHead3,img2:womanHead33,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"black",color2:"red" ,color3:"wheat",price:15,switch:true,season:"лето"},
    //     {id:4, cheked:false, img:womanHead4,img2:womanHead44,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"black",color2:"red", color3:"black",price:15,switch:true,season:"весна"},
    //     {id:5, cheked:false, img:womanHead5,img2:womanHead55,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"red",color2:"red", color3:"black",price:25,switch:true,season:"зима"},
    //     {id:6, cheked:false, img:womanHead6, img2:womanHead66 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"red",color2:"wheat", color3:"black",price:15,switch:true,season:"лето"},
    //     {id:7, cheked:false, img:womanHead7, img2:womanHead77 ,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"red",color2:"wheat", color3:"black",price:25,switch:true,season:"лето"},
    //     {id:8, cheked:false, img:womanHead8, img2:womanHead88 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"black",color2:"wheat", color3:"black",price:"25р",switch:true,season:"осень"},
    //     {id:9, cheked:false, img:womanHead9, img2:womanHead99 ,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"wheat",color2:"wheat", color3:"black",price:"25р",switch:true,season:"весна"},
    //     {id:10,cheked:false, img:womanHead10, img2:womanHead1010 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"wheat",color2:"wheat", color3:"black",price:"25р",switch:true,season:"лето"},
    //     {id:11,cheked:false, img:womanHead111, img2:womanHead111111 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"wheat",color2:"wheat" ,color3:"wheat",price:"25р",switch:true,season:"лето"}],

    tittleShopPage:{
        
        tittleHats:"Шапки",
        tittleScarves:"Шарфы",
        tittleWrap:"Платки",
        titleGloves:"Перчатки"

    },

    filter:false,    

    

womanHats:[
    
               {id:1, filter:true,img:womanHead1,img2:womanHead11, tittle:"Шапка белая", structure:"Шерсть", price:25, season:"Зима",switch:false},
               {id:2, filter:true,img:womanHead2,img2:womanHead22, tittle:"Шапка белая", structure:"Шерсть", price:23, season:"Зима",switch:false},
               {id:3, filter:true,img:womanHead3,img2:womanHead33, tittle:"Шапка белая", structure:"Шерсть", price:22, season:"Зима",switch:false},
               {id:4, filter:true,img:womanHead4,img2:womanHead44, tittle:"Шапка белая", structure:"Шерсть", price:21, season:"Зима",switch:false},
               {id:5, filter:true,img:womanHead5,img2:womanHead55, tittle:"Шапка белая", structure:"Шерсть", price:24, season:"Зима",switch:false},
               
                 
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
    {id:1,img:womanWrap1,img2:womanWrap11, tittle:"Платок", structure:"Шерсть", price:25, season:"Зима",switch:false},

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


            // case CLICK_FILTER:

            // return {...state,filter:true}

            // case SWITCH_MAN_HATS:

            // return {...state,manHats}








                // return{...state,womanScarves:state.womanScarves.map((scarves)=>{
                //     if(scarves.id===action.id){
                //         return {...scarves, switch:true}
                //     }
                //     return {...scarves, switch:false}
                // })}

                

                // case CHEKEDTOOGLE :

                // return{...state,cards:state.cards.map((card)=>{
                //     if(action.cheked===true && action.structure===card.structure){
                //         return {...card,cheked:true}
                //     }
                //     return {...card,cheked:false}
                    
                // })}
                

                case DATA_FILTER_FORM :

                    return{...state,womanScarves:state.womanScarves.map(item=>{
                        if( item.season === action.values.value && action.values.checked===true){

                            return {...item,filter:false}
                        
                        }
                        return  {...item,filter:true}
                    })}


                    case CLEAR_FILTER_FORM : 

                    
                           return {...state,womanScarves:state.womanScarves.map(item=>({...item,filter:false}))}
            
                   


                    // case DATA_FILTER_CLEAR:

                    //      return {...state,womanScarves:state.womanScarves.filter(item=>item.filter===false).map(item=>{
                    //          return {...state,filter:true}
                    //      })}
                     

                            
                    //     .map((card)=>{
                    //     if( action.values.price === card.price){
                            
                           
                    //         return {...card}
                            
                    //     } 
                    //     return card
                       
                    // })}


                //     case CHEKEDSEASON:

                //     return{...state,cards:state.cards.map((card)=>{
                //         if(action.cheked===true && action.season===card.season){
                //             return {...card,cheked:true}
                //         } 
                //         return {...card,cheked:false}
                        
                //     })}
        
            
      
        // return {...card,cheked:false}
        



                


                // return{...state,cards:state.cards.filter((card)=>{
                //    if( action.cheked===true && card.color1===action.color){
                //        return{...card}
                //    } 
                //    return {...state,cardss:[...state.cards]}
                   
                // })}


                default: return state
        }
    
   
}


 export const switchOnWomanHatsAc =(id)=>({type:SWITCHON_WOMAN_HATS ,id})
 export const switchOnWomanScarvesAc =(id)=>({type:SWITCHON_WOMAN_SCARVES ,id})
 export const switchOnWomanWrapAc=(id)=>({type:SWITCH_WOMAN_WRAP, id})
 export const switchOnWomanGlovesAc=(id)=>({type:SWITCH_WOMAN_GLOVES,id})
 export const clearFilterFormAc =()=>({type:CLEAR_FILTER_FORM})

 export const chekedToogleAc =(cheked,structure)=>({type:CHEKEDTOOGLE ,cheked, structure})

 export const chekedPriceAc =(values)=>({type:DATA_FILTER_FORM,values })

 export const chekedSeasonAc =(cheked,season)=>({type:CHEKEDSEASON, cheked, season})
 export const clickFilterAc = ()=>({type:CLICK_FILTER})
export default shopReducer;
