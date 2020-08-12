import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function SpeciesList() {

    const [starships, setStarships] = useState('');

    useEffect(()=> {
        if(starships === ''){
            fetchData.fetchStarshipsData(setStarships, "1");
        }
    }, [starships, setStarships]);

    const createStarshipList = ()=> {
        if(Object.keys(starships).length > 0){
            return starships.map((result, i)=> {
                return <ListItem key={i} data={result} link='starships'/>
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