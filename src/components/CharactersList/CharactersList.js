import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'

export default function CharactersList() {

    const [characters, setCharacters] = useState('');

    useEffect(()=> {
        if(characters === ''){
            fetchData.fetchCharacterData(setCharacters, "1");
        }
    }, [characters, setCharacters]);

    const createCharaterList = ()=> {
        if(Object.keys(characters).length > 0){
            return characters.map((data, i)=> {
                return <ListItem key={i} data={data} link='characters'/>
            });
        }else{
            return <li>Loading...</li>
        }
    }

    return (
        <ul>
           {createCharaterList()} 
        </ul>
    )
}
