import React from 'react';
import {useQuery} from 'react-query';

const fetchPeoples = async () =>{
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}

const Peoples = () => {
    const {data, status} = useQuery('people', fetchPeoples);
    console.log(status);
    return <>
    <p>People component</p>
    {status === 'loading' && (
        <div>Loading</div>
    )
    }
    {status === 'error' && (
        <div>Error fetching data</div>
    )
    }
     {status === 'success' && (
         
        <div>{
            data.results.map(people => <p>{people.name}</p>)
        }</div>
    )
    }
 </>
}


export default Peoples;