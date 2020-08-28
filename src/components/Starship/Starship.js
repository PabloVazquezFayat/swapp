import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'
import InputLabel from '../InputLabel/InputLabel'

export default function Planet() {

    const [data, setData] = useState('');

    const getData = async ()=> {
        if(data === ''){
            const results = await fetchData.fetchStarshipsDataByID(window.location.href.split('/')[4]);
            setData(results);
        } 
    }

    useEffect(()=>{
        getData();      
    });

    const createStarship = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <InputLabel propertyName='Name' >{data.name ? data.name : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="name" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Model' >{data.model ? data.model : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="model" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Manufacturer' >{data.manufacturer ? data.manufacturer : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="manufacturer" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Const In Credits' >{data.costInCredits ? data.costInCredits : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="costInCredits" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Length' >{data.length ? data.length : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="length" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Max Atmosphering Speed' >{data.maxAtmospheringSpeed ? data.maxAtmospheringSpeed : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="maxAtmospheringSpeed" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Crew' >{data.crew ? data.crew : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="crew" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Passengers' >{data.passengers ? data.passengers : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="passengers" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Cargo Capacity' >{data.cargoCapacity ? data.cargoCapacity : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="cargoCapacity" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Consumables' >{data.consumables ? data.consumables : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="consumables" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Hyperdrive Rating' >{data.hyperdriveRating ? data.hyperdriveRating : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="hyperdriveRating" endpoint="updateStarshipsData"/>

                        <InputLabel propertyName='Starship Class' >{data.starshipClass ? data.starshipClass : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="starshipClass" endpoint="updateStarshipsData"/>

                    </div>
        }else if(data.status === false){
            return data.page;
        }else{
            return <p>Loading...</p>
        }
    }

    return (
        <div>{createStarship()}</div>
    )
}