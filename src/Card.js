import React from 'react';
import { spawn } from 'child_process';

const Card = ({ name, email, id }) => {
    return ( 
        <div className='bg-light-yellow dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
     )
}

export default Card;

