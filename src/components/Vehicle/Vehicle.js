import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'

export default function Planet() {

    const [data, setData] = useState('');

    const getData = async ()=> {
        if(data === ''){
            const results = await fetchData.fetchVehiclesDataByID(window.location.href.split('/')[4]);
            setData(results)
        } 
    }

    useEffect(()=>{
        getData();      
    });

    const createVehicle = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <p>{data.name}</p>
                        <Input data={{...data}} cb={setData} propertyName='name' endpoint='updateVehiclesData'/>
                    </div>
        }else if(data.status === false){
            return data.page;
        }else{
            return <p>Loading...</p>
        }
    }

    return (
        <div>{createVehicle()}</div>
    )
}