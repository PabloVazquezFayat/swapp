import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function PlanetList() {

    const [planets, setPlanets] = useState('');

    const getData = async ()=> {
        if(planets === ''){
            const data = await fetchData.fetchPlanetsData("1");
            setPlanets(data);
        }
    }

    useEffect(()=> {
        getData();
    });

    const createPlanetsList = ()=> {
        if(Object.keys(planets).length > 0 && planets.status === undefined){
            return planets.map((result, i)=> {
                return <ListItem key={i} data={result} link='planets'/>
            });
        }else if(planets.status === false){
            return planets.page;
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