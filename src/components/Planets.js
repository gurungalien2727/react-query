import React from 'react';
import {useQuery} from 'react-query';
import {Planet} from './Planet';

const fetchPlanets = async () =>{
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

const Planets = () => {
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
            data.results.map(planet => <Planet planet={planet}></Planet>)
        }</div>
    )
    }



    </>

}


export default Planets;