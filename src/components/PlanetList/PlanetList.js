import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'
import PaginationController from '../PaginationController/PaginationController'

export default function PlanetList() {

    const [planets, setPlanets] = useState('');
    const [page, setPage] = useState('1');
    const count = planets.count;

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
            return planets.data.map((result, i)=> {
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
           <PaginationController cb={{setData:setPlanets, setPage: setPage}} page={page} count={count} endpoint='fetchPlanetsData'/>
        </ul>
    )
}