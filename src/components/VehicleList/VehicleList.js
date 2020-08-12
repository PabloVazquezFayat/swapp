import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function SpeciesList() {

    const [vehicles, setVehicles] = useState('');

    useEffect(()=> {
        if(vehicles === ''){
            fetchData.fetchVehiclesData(setVehicles, "1");
        }
    }, [vehicles, setVehicles]);

    const createStarshipList = ()=> {
        if(Object.keys(vehicles).length > 0){
            return vehicles.map((result, i)=> {
                return <ListItem key={i} data={result} link='vehicles'/>
            });
        }else{
            return <li>Loading...</li>
        }
    }

    return (
        <ul>
           {createStarshipList()} 
        </ul>
    )
}