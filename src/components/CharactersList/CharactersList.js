import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import ListItem from '../ListItem/ListItem'
import PaginationController from '../PaginationController/PaginationController'

export default function CharactersList() {

    const [characters, setCharacters] = useState('');
    const [page, setPage] = useState('1');
    const count = characters.count;

    const getData = async ()=> {
        if(characters === ''){
            const results = await fetchData.fetchCharacterData(page);
            setCharacters(results);
        }
    }

    useEffect(()=> {
        getData();
    });

    const createCharaterList = ()=> {
        if(Object.keys(characters).length > 0 && characters.status === undefined){
            return characters.characters.map((data, i)=> {
                return <ListItem key={i} data={data} link='characters'/>
            });
        }else if(characters.status === false){
            return characters.page;
        }else{
            return <li>Loading...</li>
        }
    }

    return (
        <ul>
           {createCharaterList()}
           <PaginationController cb={{setCharacters, setPage}} page={page} count={count}/>
        </ul>
    )
}
