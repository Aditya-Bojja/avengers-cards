import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return(
        <div className = "tc dib br3 pa3 ma3 grow shadow-5 custombg">
            <img src = {`https://robohash.org/${id}`} alt = "robot"/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default Card;