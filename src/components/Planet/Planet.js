import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function Planet(props) {

    const [data, setData] = useState('');

    useEffect(()=>{
        if(data === ''){
            fetchData.fetchPlanetDataByID(setData, window.location.href.split('/')[4]);
        }       
    }, [data, setData]);

    const createPlanet = ()=> {
        if(Object.keys(data).length > 0){
            return  <div>
                        <p>{data.name}</p>
                    </div>
        }else{
            return <p>Loading...</p>
        }
    }

    return (
        <div>{createPlanet()}</div>
    )
}

