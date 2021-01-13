import React, { useState } from "react";
import "./filter.css";

const Filter =()=>{


    const [circle, setCircle] = useState(true)
    // const [circle2, setCircle2] =useState(false)

    return <>
    <div  className="filterr"  onMouseMove={()=>{setCircle(false)}} onMouseOut={()=>{setCircle(true)}} >

    <span>
        <div className={(circle) ?"filterr-circle": "move-circle"}></div>
        </span>
</div>


</>


}

export default Filter;