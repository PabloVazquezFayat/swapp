import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'
import InputLabel from '../InputLabel/InputLabel'

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
                        <InputLabel propertyName='Name' >{data.name ? data.name : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="name" endpoint="updateSpeciestData"/>

                        <InputLabel propertyName='Classification' >{data.classification ? data.classification : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="classification" endpoint="updateSpeciestData"/>

                        <InputLabel propertyName='Designation' >{data.designation ? data.designation : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="designation" endpoint="updateSpeciestData"/>

                        <InputLabel propertyName='Average Lifespan' >{data.averageLifespan ? data.averageLifespan : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="averageLifespan" endpoint="updateSpeciestData"/>

                        <InputLabel propertyName='Language' >{data.language ? data.language : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="language" endpoint="updateSpeciestData"/>


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
