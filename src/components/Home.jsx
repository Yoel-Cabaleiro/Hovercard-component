import React from "react";
import { Hovercard } from "./Hovercard";
import logoImageWarrior from '../img/Warrior-logo.png';
import hoverImageWarrior from '../img/Warrior-hover.png';
import bgImageWarrior from "../img/Warrior-bg.png"





export const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-5 mb-5">
            <Hovercard logo={logoImageWarrior} hoverImg={hoverImageWarrior} bgImg={bgImageWarrior} />
             
            </div>
        
        </div>
            
        
        
    )   

}
