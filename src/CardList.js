import React from 'react';

import Card from './Card';

const CardList = ( {robots} ) => {

    return(
        <div>
            {
                robots.map((robot, index)=> {
                    return (
                        <Card 
                            key={`myRobot${index}`} 
                            email={robot.email}  
                            name={robot.name} 
                            id={robot.id} />
                    );
                })
            }
        </div> 
    );
}

export default CardList;