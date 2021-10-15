import React from 'react';
import {useQuery} from 'react-query';

const fetchPlanets = async () =>{
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

const Planet = () => {
    const {data, status} = useQuery('planets', fetchPlanets);
    console.log(status);
    return <>
    <p>Planet component</p>
    {status === 'loading' && (
        <div>Loading data</div>
    )
    }
    {status === 'error' && (
        <div>Error fetching data</div>
    )
    }
     {status === 'success' && (
         
        <div>{
            data.results.map(planet => <p>{planet.name}</p>)
        }</div>
    )
    }



    </>

}


export default Planet;