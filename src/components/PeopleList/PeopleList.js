import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import PeopleListItem from '../PeopleListItem/PeopleListItem'

export default function PeopleList(props) {

    const [people, setPeople] = useState('');

    useEffect(()=> {
        if(people === ''){
            fetchData.fetchPeopleData(setPeople);
            console.log(people);
        }
    }, [people, setPeople]);

    const createPeopleList = ()=> {
        if(Object.keys(people).length > 0){
            return people.results.map((result, i)=> {
                return <PeopleListItem key={i} data={result}/>
            });
        }else{
            return <li>Loading...</li>
        }
    }

    return (
        <ul>
           {createPeopleList()} 
        </ul>
    )
}
