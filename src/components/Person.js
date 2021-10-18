import React from 'react';

export const Person= ({person}) =>{

  return (
      <>
      <h3>{person.name}</h3>
      <p>{person.gender}</p>
      </>
  )  
  
}
