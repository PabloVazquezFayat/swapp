import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import PlanetListItem from '../PlanetListItem/PlanetListItem'

export default function PlanetList(props) {

    const [planets, setPlanets] = useState('');

    useEffect(()=> {
        if(planets === ''){
            fetchData.fetchPlanetsData(setPlanets);
        }
    }, [planets, setPlanets]);

    const createPlanetsList = ()=> {
        if(Object.keys(planets).length > 0){
            console.log(planets);
            return planets.results.map((result, i)=> {
                return <PlanetListItem key={i} data={result}/>
            });
        }else{
            return <li>Loading...</li>
        }
    }

    return (
        <ul>
           {createPlanetsList()} 
        </ul>
    )
}