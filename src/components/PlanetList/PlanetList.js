import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function PlanetList() {

    const [planets, setPlanets] = useState('');

    useEffect(()=> {
        if(planets === ''){
            fetchData.fetchPlanetsData(setPlanets, "1");
        }
    }, [planets, setPlanets]);

    const createPlanetsList = ()=> {
        if(Object.keys(planets).length > 0){
            return planets.map((result, i)=> {
                return <ListItem key={i} data={result} link='planets'/>
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