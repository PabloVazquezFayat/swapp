import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'
import PaginationController from '../PaginationController/PaginationController'

export default function SpeciesList() {

    const [starships, setStarships] = useState('');
    const [page, setPage] = useState('1');
    const count = starships.count;

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
            return starships.data.map((result, i)=> {
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
           <PaginationController cb={{setData:setStarships, setPage: setPage}} page={page} count={count} endpoint='fetchStarshipsData'/>
        </ul>
    )
}