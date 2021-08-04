import React from 'react';
import Card from './Card';

const CardList = ({avengers}) => {
    return(
        <div>
            {
                avengers.map((user, i) => {
                    return(
                        <Card key = {avengers[i].img} image = {avengers[i].img} role = {avengers[i].role} name = {avengers[i].name}/>
                    );
                })
            }
        </div>
    );
};

export default CardList;