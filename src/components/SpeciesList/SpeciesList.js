import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function SpeciesList() {

    const [species, setSpecies] = useState('');

    useEffect(()=> {
        if(species === ''){
            fetchData.fetchSpeciesData(setSpecies, "1");
        }
    }, [species, setSpecies]);

    const createSpeciesList = ()=> {
        if(Object.keys(species).length > 0){
            return species.map((result, i)=> {
                return <ListItem key={i} data={result} link='species'/>
            });
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