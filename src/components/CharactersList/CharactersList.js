import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import CharactersListItem from '../CharactersListItem/CharactersListItem'

export default function PeopleList() {

    const [characters, setCharacters] = useState('');

    useEffect(()=> {
        if(characters === ''){
            fetchData.fetchCharacterData(setCharacters, "1");
        }
    }, [characters, setCharacters]);

    const createCharaterList = ()=> {
        if(Object.keys(characters).length > 0){
            return characters.map((data, i)=> {
                return <CharactersListItem key={i} data={data}/>
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
