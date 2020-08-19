import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function SpeciesList() {

    const [starships, setStarships] = useState('');

    const getData = async ()=> {
        if(starships === ''){
            const data = await fetchData.fetchStarshipsData("1");
            setStarships(data);
        }
    }

    useEffect(()=> {
        getData();
    });

    const createStarshipList = ()=> {
        if(Object.keys(starships).length > 0 && starships.status === undefined){
            return starships.map((result, i)=> {
                return <ListItem key={i} data={result} link='starships'/>
            });
        }else if(starships.status === false){
            return starships.page;
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