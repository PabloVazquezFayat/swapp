import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function Characters(props) {

    const [data, setData] = useState('');

    useEffect(()=>{
        if(data === ''){
            fetchData.fetchCharacterDataByID(setData, window.location.href.split('/')[4]);
        }       
    }, [data, setData]);

    const createCharater = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <p>{data.name}</p>
                    </div>
        }else if(data.status === false){
            return data.page
        }else{
            return <p>Loading...</p>
        }
    }

    return (
        <div>{createCharater()}</div>
    )
}
