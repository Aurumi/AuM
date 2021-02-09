import React, { useState } from "react";

import "./basketPage.css"


let BasketPage =(props)=>{



   let arr=props.valueBasket
   let sum = 0
    for(var obj in arr ){  

        sum +=arr[obj].price
    }


    
return <div className="Basket-Page-Wrapper">


<div className="Basket-Page-Wrapper-container">


<div className="Basket-Page-tittle">Корзина</div>


<div className="Basket-Page-section-left">

{props.valueBasket.map(product=>{

  return <div key={product.id} className="Basket-Page-product">
        
        <div className="Basket-Page-product_image">
            <img src={product.img}/>
        </div>
        <div className="Basket-Page-product_infoProduct">
             
             <div className="Basket-Page-product_tittle">{product.tittle}</div>
             <div className="Basket-Page-product_price">{product.price} б.руб</div>
             <div className="Basket-Page-color">{product.color}</div>
            
        </div>
        <div onClick={()=>{props.deleteProductAc(product.id)}} className="crossClose"></div>
    </div>
  

})}
    

</div>
<div className="Basket-Page-section-right">

<div className="Product-summ">

Итого к оплате : {sum} б.руб

</div>

</div>
</div>




</div>

}


export default BasketPage