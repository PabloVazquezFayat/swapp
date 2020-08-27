import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'
import PaginationController from '../PaginationController/PaginationController'

export default function SpeciesList() {

    const [species, setSpecies] = useState('');
    const [page , setPage] = useState('1');
    const count = species.count;

    const getData = async ()=> {
        if(species === ''){
            const data = await fetchData.fetchSpeciesData("1");
            setSpecies(data);
        }
    }

    useEffect(()=> {
        getData();
    });

    const createSpeciesList = ()=> {
        if(Object.keys(species).length > 0 && species.status === undefined){
            return species.data.map((result, i)=> {
                return <ListItem key={i} data={result} link='species'/>
            });
        }else if(species.status === false){
            return species.page;
        }else{
            return <li>Loading...</li>
        }
    }

    return (
        <ul>
           {createSpeciesList()}
           <PaginationController cb={{setData:setSpecies, setPage: setPage}} page={page} count={count} endpoint='fetchSpeciesData'/> 
        </ul>
    )
}