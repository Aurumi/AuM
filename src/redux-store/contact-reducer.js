
import Programer from "../image/Contacts/Programer.jpg"
import manager1 from "../image/Contacts/manager1.jpg"
import  manager2 from "../image/Contacts/manager2.jpg"
import manager3 from "../image/Contacts/manager3.jpg"

const VISIBLE = "VISIBLE"
// import Programer from "../image/Contacts/Programer.jpg"


const initialState = {

    People :[{ id:1, visible:false, img:Programer ,name:"Куликов Игорь",profession:"Разработчик сайта"} ,
    { id:2, visible:false,  img:manager1, name:"Куликова Наталья", profession:"Продавец" , mobile:"+375336858490"},
    { id:3, visible:false,  img:manager2, name:"Дудко Аурика", profession:"Продавец", mobile:"+375334346879" },
    { id:4, visible:false,  img:manager3 , name:"Дудко Александр" , profession:"Продавец" ,mobile:"+375336866623"}],

    visible:false
}

    
const contactReducer =(state=initialState, action)=>{


    switch(action.type){

        case VISIBLE:

            return{...state, People:state.People.map((u)=>{

                if(u.id===action.id){
                    return {...u, visible:true}

                }  
                return {...u, visible:false} ;
            })}
            default:
                 return  state;
    }
  

     
}

export default contactReducer;

 export const visibleAC = (id)=>({type:VISIBLE ,id})