import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function SpeciesList() {

    const [species, setSpecies] = useState('');

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
            return species.map((result, i)=> {
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
        </ul>
    )
}