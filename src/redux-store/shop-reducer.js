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
import womanHead6 from "../image/models/womanHeads/zara6.jpg"
import womanHead66 from "../image/models/womanHeads/zara66.jpg"
import womanHead7 from "../image/models/womanHeads/zara7.jpg"
import womanHead77 from "../image/models/womanHeads/zara77.jpg"
import womanHead8 from "../image/models/womanHeads/zara8.jpg"
import womanHead88 from "../image/models/womanHeads/zara88.jpg"
import womanHead9 from "../image/models/womanHeads/zara9.jpg"
import womanHead99 from "../image/models/womanHeads/zara99.jpg"
import womanHead10 from "../image/models/womanHeads/zara10.jpg"
import womanHead1010 from "../image/models/womanHeads/zara1010.jpg"
import womanHead111 from "../image/models/womanHeads/zara111.jpg"
import womanHead111111 from "../image/models/womanHeads/zara111111.jpg"







const SWITCHON ="SWITCHON";
 const CHEKEDTOOGLE ="CHEKEDTOOGLE"

const CHEKEDSELL="CHEKEDSELL"
const CHEKEDSEASON ="CHEKEDSEASON"

const initialState ={

 
   

     shopNavigationMass :[

        {mainTittle:"Мужское",
        tittleFirst:"Головные уборы", 
        tittleSecond:"Перчатки", 
        tittleThird:"Шарфы" ,
        liFirst:"Кепки", 
        liSecond:"Шапки",
        liThird:"Кожа",
        liFourth:"Нитка",
        liFifth:"Кашне",
        lisixth:"Тонкие"
    }

        ,{mainTittle:"Женское",
         tittleFirst:"Головные уборы",
        tittleSecond:"Перчатки",
        tittleThird:"Шарфы" ,
        liFirst:"Шапки", 
        liSecond:"Шляпы",
        liThird:"Береты",
        liFourth:"Кожа",
        liFifth:"Ткань",
        

        }
        ,{mainTittle:"Детское"
        ,tittleFirst:"Головные уборы"
        , tittleThird:"Шарфы" 
        ,tittleSecond:"Перчатки" 
        , liFirst:"Ткань"
        , liSecond:"Кожа",}


    ],


    cards:[{id:1,cheked:false, img:womanHead1, img2:womanHead11, tittle:"Шапка белая с подкладкой",structure:" Шерсть 80%/ polisteren20%",color1:"black",color2:"red" ,color3:"wheat",price:25,switch:true, season:"лето"} ,
        {id:2, cheked:false, img:womanHead2,img2:womanHead22 ,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/polisteren20%",color1:"black",color2:"red",color3:"wheat",price:25,switch:true,season:"лето"},
        {id:3, cheked:false,img:womanHead3,img2:womanHead33,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"black",color2:"red" ,color3:"wheat",price:15,switch:true,season:"лето"},
        {id:4, cheked:false, img:womanHead4,img2:womanHead44,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"black",color2:"red", color3:"black",price:15,switch:true,season:"весна"},
        {id:5, cheked:false, img:womanHead5,img2:womanHead55,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"red",color2:"red", color3:"black",price:25,switch:true,season:"зима"},
        {id:6, cheked:false, img:womanHead6, img2:womanHead66 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"red",color2:"wheat", color3:"black",price:15,switch:true,season:"лето"},
        {id:7, cheked:false, img:womanHead7, img2:womanHead77 ,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"red",color2:"wheat", color3:"black",price:25,switch:true,season:"лето"},
        {id:8, cheked:false, img:womanHead8, img2:womanHead88 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"black",color2:"wheat", color3:"black",price:"25р",switch:true,season:"осень"},
        {id:9, cheked:false, img:womanHead9, img2:womanHead99 ,tittle:"Шапка белая с подкладкой",structure:"Шерсть 80%/ polisteren20%",color1:"wheat",color2:"wheat", color3:"black",price:"25р",switch:true,season:"весна"},
        {id:10,cheked:false, img:womanHead10, img2:womanHead1010 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"wheat",color2:"wheat", color3:"black",price:"25р",switch:true,season:"лето"},
        {id:11,cheked:false, img:womanHead111, img2:womanHead111111 ,tittle:"Шапка белая с подкладкой",structure:"Хлопок 80%/ polisteren20%",color1:"wheat",color2:"wheat" ,color3:"wheat",price:"25р",switch:true,season:"лето"}]


}


const shopReducer =(state=initialState, action)=>{


        switch(action.type){

            case SWITCHON:
                return{...state,cards:state.cards.map((card)=>{
                    if(card.id===action.id){
                        return {...card, switch:false}
                    }
                    return {...card, switch:true}
                })}

                case CHEKEDTOOGLE :

                return{...state,cards:state.cards.map((card)=>{
                    if(action.cheked===true && action.structure===card.structure){
                        return {...card,cheked:true}
                    }
                    return {...card,cheked:false}
                    
                })}
                

                case CHEKEDSELL :

                    return{...state,cards:state.cards.map((card)=>{
                        if(action.cheked===true && action.price===card.price){
                            return {...card,cheked:true}
                        } 
                        return {...card,cheked:false}
                        
                    })}


                    case CHEKEDSEASON:

                    return{...state,cards:state.cards.map((card)=>{
                        if(action.cheked===true && action.season===card.season){
                            return {...card,cheked:true}
                        } 
                        return {...card,cheked:false}
                        
                    })}
        
            
      
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


 export const switchOnAc =(id)=>({type:SWITCHON ,id})

 export const chekedToogleAc =(cheked,structure)=>({type:CHEKEDTOOGLE ,cheked, structure})

 export const chekedPriceAc =(cheked,price)=>({type:CHEKEDSELL ,cheked, price})

 export const chekedSeasonAc =(cheked,season)=>({type:CHEKEDSEASON, cheked, season})

export default shopReducer;
