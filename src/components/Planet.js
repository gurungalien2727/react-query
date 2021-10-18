import React from 'react';

export const Planet= ({planet}) =>{

  return (
      <>
      <h3>{planet.name}</h3>
      <p>{planet.population}</p>
      </>
  )  
  
}
