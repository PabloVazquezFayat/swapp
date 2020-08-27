import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'
import PaginationController from '../PaginationController/PaginationController'

export default function SpeciesList() {

    const [vehicles, setVehicles] = useState('');
    const [page, setPage] = useState('1');
    const count = vehicles.count

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
            return vehicles.data.map((result, i)=> {
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
           <PaginationController cb={{setData:setVehicles, setPage: setPage}} page={page} count={count} endpoint='fetchVehiclesData'/>
        </ul>
    )
}