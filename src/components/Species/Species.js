import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function Planet() {

    const [data, setData] = useState('');

    const getData = async ()=> {
        if(data === ''){
            const results = await fetchData.fetchSpeciesDataByID(window.location.href.split('/')[4]);
            setData(results);
        }  
    }

    useEffect(()=>{
        getData();     
    });

    const createSpecies = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <p>{data.name}</p>
                    </div>
        }else if(data.status === false){
            return data.page;
        }else{
            return <p>Loading...</p>
        }
    }

    return (
        <div>{createSpecies()}</div>
    )
}
