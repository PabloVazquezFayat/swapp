import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function Planet() {

    const [data, setData] = useState('');

    const getData = async ()=> {
        if(data === ''){
            const results = await fetchData.fetchPlanetDataByID(window.location.href.split('/')[4]);
            setData(results);
        }  
    }

    useEffect(()=>{
        getData();     
    });

    const createPlanet = ()=> {
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
        <div>{createPlanet()}</div>
    )
}

