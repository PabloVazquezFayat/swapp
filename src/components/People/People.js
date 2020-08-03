import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function People(props) {

    const [data, setData] = useState('');

    useEffect(()=>{
        if(data === ''){
            fetchData.fetchPeopleDataByID(setData, window.location.href.split('/')[4]);
        }       
    }, [data, setData]);

    const createPerson = ()=> {
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
        <div>{createPerson()}</div>
    )
}
