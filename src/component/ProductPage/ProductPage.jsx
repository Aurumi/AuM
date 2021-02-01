import React from 'react'
import pg from "./productPage.module.css"


const ProductPage =(props)=>{

    return <div className={pg.wrapper}>

<img src={props.dataCard.img2}/> 
  
  
    </div>
}


export default ProductPage
