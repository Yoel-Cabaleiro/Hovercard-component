import React from "react";
import PropTypes from "prop-types";


export const Hovercard = (props) => {
   return(
    <div className="col wrapper mt-5 mb-5">
        <div className="warrior">
            <img className="logo" src={props.logo} alt="" />
            <img className="hover-img" src={props.hoverImg} alt="" />  
            <img className="bg-img" src={props.bgImg} alt="" />
        </div> 
    </div>
       
    
   ) 
}

Hovercard.propTypes = {
    logo: PropTypes.string,
    hoverImg: PropTypes.string,
    bgImg: PropTypes.string,
}