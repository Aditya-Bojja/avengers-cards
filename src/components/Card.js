import React from 'react';
import './Card.css';

const Card = ({image, role, name}) => {
    return(
        <div className = "tc custombg dib br3 pa3 ma3 grow shadow-5">
            <img src = {image} alt = "avenger"/>
            <h1>{role}</h1>
            <p>{name}</p>
        </div>
    );
}

export default Card;