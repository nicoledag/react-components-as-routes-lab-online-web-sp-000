import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>

    <h1>Actors Page</h1>
    
    {actors.map(actor => {
          return <div>
          <h3>Name: {actor.name}</h3>
          <ul>{actor.movies.map(movie => (<li>{movie}</li>))}</ul>
          </div>
        })}
      


    </div>
  );
};

export default Actors;
