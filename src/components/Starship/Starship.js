import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function Planet() {

    const [data, setData] = useState('');

    useEffect(()=>{
        if(data === ''){
            fetchData.fetchStarshipsDataByID(setData, window.location.href.split('/')[4]);
        }       
    }, [data, setData]);

    const createStarship = ()=> {
        if(Object.keys(data).length > 0){
            return  <div>
                        <p>{data.name}</p>
                    </div>
        }else{
            return <p>Loading...</p>
        }
    }

    return (
        <div>{createStarship()}</div>
    )
}