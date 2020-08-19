import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function SpeciesList() {

    const [vehicles, setVehicles] = useState('');

    const getData = async ()=> {
        if(vehicles === ''){
            const data = await fetchData.fetchVehiclesData( "1");
            setVehicles(data);
        }
    }

    useEffect(()=> {
        getData();
    });

    const createStarshipList = ()=> {
        if(Object.keys(vehicles).length > 0 && vehicles.status === undefined){
            return vehicles.map((result, i)=> {
                return <ListItem key={i} data={result} link='vehicles'/>
            });

        }else if(vehicles.status === false){
            return vehicles.page;
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