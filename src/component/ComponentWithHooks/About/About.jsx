import React, { useRef } from "react";
import "../About/about.css"
import {Spring ,Donut} from 'react-spring/renderprops'
import { NavLink } from "react-router-dom";
import work1 from "./../../../image/about/work1.jpg"
import work2 from "./../../../image/about/work2.jpg"
import work3 from "./../../../image/about/work3.jpg"
const About =()=>{



    
   
    return <div className=" wrapperr">
        <div className="aboutHeader" > 
        <div className="aboutHeader__tittle" data-aos="fade-left" >  A&U </div>
        <div className="aboutHeader__text"> </div>
        </div>
        <div className="aboutMain" data-aos="fade-up">

            <div className="abotMain__tittle">О НАС</div>

            <div className="aboutMain__text " data-aos-delay="500" data-aos="fade-right">
                <p>MediaMonks is a global creative production company that partners with clients across industries and markets to craft amazing work for leading businesses and brands. Its integrated production capabilities span the entire creative spectrum, covering anything you could possibly want from a production partner, and probably more.

From creative campaigns and content to bespoke develop. Operating across teams, time zones, and technologies with an incredible in-house team of more than 1500 Monks, including recent S4Capital mergers. Its work is recognized by advertising and craft awards around the world, producing 131 Cannes Lions and 250+ FWAs to date.

Founded in 2001 and rooted in digital, you can find MediaView, Sandpoint, Toronto, New York, Mexico City, Buenos Aires, São Paulo, Dublin, London, Amsterdam, Hilversum, Cape Town, Stockholm, Kiev, Dnepr, Moscow, Nur-Sultan, Dubai, Mumbai, Bangalore, Delhi, Singapore, Shanghai, Sydney, Melbourne, and Auckland.</p>
            </div>
           <NavLink to="/ZARA"><div className="aboutMain__button allButton"> WATCH OUR MIXTAPE</div></NavLink> 
        </div>

        <div className="aboutOurPeople">
            <ul className= "aboutOurPeople__row">
                    <li className= "aboutOurPeople__element" data-aos="fade-left" data-aos-delay="600"><img src={work1} alt="ups" /></li>
                    <li className= "aboutOurPeople__element"  data-aos="fade-right" data-aos-delay="900"> <img src={work2} alt="ups" /> </li>
                    <li className= "aboutOurPeople__element" data-aos="fade-up" data-aos-delay="1200"> <img src={work3} alt="ups" /> </li>

            </ul>

        </div>
</div>

}



export default About;