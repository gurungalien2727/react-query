import React from 'react';
import Peoples from './Peoples';
import Planets  from './Planets';

const Navbar = ({setPage}) => {
 
    return (<nav>
    <h4>Navbar component</h4>
    <button onClick={()=> setPage('people')}>People</button>
    <button onClick={()=> setPage('planet')}>Planet</button>
    </nav>
    )

}


export default Navbar;