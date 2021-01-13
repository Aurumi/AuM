import React from "react";
import './ourVideo.css';

import videofile from "../../../video/ZARA.mp4"
import videofon from "../../../image/backroundVideo/fonVideo.JPG"

const OurVideo =()=>{

    return <div className="videoWrapper"> 

    <div className=""></div>
        <video  className="video"  poster={videofon} autoPlay loop muted controls>

                <source  src={videofile} type="video/mp4"  />
        </video>

    </div>
}

export default OurVideo