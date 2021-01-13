import React from "react"
import "./main.css"


import bycicle2 from "../../../image/bycicle2.jpg"
import bycicle3 from "../../../image/bycicle3.jpg"
import bycicle4 from "../../../image/bycicle4.jpg"
import bycicleHight1 from "../../../image/bycicle1/1300x953.jpg"
import bycicleMedium1 from "../../../image/bycicle1/800x587.jpg"
import bycicleLow1 from "../../../image/bycicle1/600x440.jpg"
import { NavLink } from "react-router-dom"


const Main = ()=>{

    return <main className="main">

                <div className="main__container_1"> 
                    
                </div>
                <div className="main__container_2"> 
                <div className="main__tittle tittle">
                     <h1>Наш выбор</h1>
                </div>
                <div className="main__text text">

                    <p>
                    Определяет flex-контейнер, блочный или строчный зависит от переданного значения. Преобразовывает все свои прямые, дочерние элементы во flex-элементы. 
                    </p>
                </div>

                <div className="main__column main1 ">
                    <div className="main__item item1">

                    <NavLink to="/choesYourStyle"><div className="block"> 
                        <div className="block__text">Выбери свой стиль</div>
                        </div></NavLink> 
                       <img src={bycicleHight1} alt=""/>
                          
                    </div>
                    <div className="main__item item2">
                    
                    <div className="block"> 
                        <div className="block__text">Действуй</div>
                        </div>
                    <img src={bycicle2 } alt=""/>
                    
                    </div>
                    <div className="main__item item3">
                    <div className="block"> 
                        <div className="block__text">Ипровизируй</div>
                        </div>
                    <img src={bycicle3} alt=""/>
                    </div>
                    <div className="main__item item4">
                    <div className="block"> 
                        <div className="block__text">Освобождай</div>
                        </div>
                    <img src={bycicle4} alt=""/>
                    </div>
                   
                </div>
                
                </div>
               

    </main>
}

export default Main;