import React from 'react'
import pg from "./productPage.module.css"


const ProductPage =(props)=>{

    return <div className={pg.Wrapper}>
    
    
    <div className={pg.wrapper}>

    
  <div className={pg.box1}>

      <div className={pg.box1Flex}>
         <div className={pg.box1Flex_element}><img src={props.dataCard.img}/> </div>
         <div className={pg.box1Flex_element}> <img src={props.dataCard.img2}/> </div>
      </div>
      <div className={pg.structure}> <span>Cостав</span>-{props.dataCard.structure}</div>


  </div>
  <div className={pg.box2}>

      <div className={pg.box2_tittleProduct}>
         {props.dataCard.tittle} 
      </div>
      <div className={pg.box2_price}>
      {props.dataCard.price} б.руб
      </div>
      <div className={pg.box2_color}>
        {props.dataCard.color}
        <img src={props.dataCard.img}/>
      </div>
      <div className={pg.box2_button}>Добавить</div>

   


  </div>
  
  
  
    </div>
    </div>
}


export default ProductPage
