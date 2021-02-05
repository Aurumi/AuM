import React from "react";
import bskp from "./basketPage.module.css"



let BasketPage =(props)=>{

    console.log(props.valueBasket)

 let arr=props.valueBasket
let sum = 0
    for(var obj in arr ){

        sum +=arr[obj].price
    }
    

    return <div className={bskp.Wrapper}>

<div className={bskp.container}>
       <div className={bskp.tittle}>Корзина</div>
          <div className={bskp.gridBox}>

              <div className={bskp.gridBoxLeft}>
                    
                {props.valueBasket.map((item)=>{

                    return <>
                         
                        <div  key={item.id} className={bskp.flexBoxGorizont}>
                  <div className={bskp.gridBoxLeft_sectionImage}><img src={item.img }/></div>   

                       
                  <div className={bskp.gridBoxLeft_sectionInfo}>
                      
                      
                      <div>{item.tittle}</div>
                      <div>{item.price}</div>
                      <div>{item.color}</div>
                      
                      
                      </div>   
                      <div onClick={()=>{props.deleteProductAc(item.id)}} className={bskp.crossClose}></div>      
                  </div>
            
                    </>
                })} 

               

               

              </div>
              <div className={bskp.gridBoxRight}>Итого:{sum} б.руб</div>
                
          </div>
       </div>
    </div>
}


export default BasketPage