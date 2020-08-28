import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'
import InputLabel from '../InputLabel/InputLabel'

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
                        <InputLabel propertyName='Name' >{data.name ? data.name : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="name" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Model' >{data.model ? data.model : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="model" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Manufacturer' >{data.manufacturer ? data.manufacturer : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="manufacturer" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Length' >{data.length ? data.length : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="length" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Max Atmosphering Speed' >{data.maxAtmospheringSpeed ? data.maxAtmospheringSpeed : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="maxAtmospheringSpeed" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Crew' >{data.crew ? data.crew : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="crew" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Passengers' >{data.passengers ? data.passengers : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="passengers" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Cargo Capacity' >{data.cargoCapacity ? data.cargoCapacity : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="cargoCapacity" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Consumables' >{data.consumables ? data.consumables : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="consumables" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Vehicle Class' >{data.vehicleClass ? data.vehicleClass : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="vehicleClass" endpoint='updateVehiclesData'/>

                        <InputLabel propertyName='Cost In Credits' >{data.costInCredits ? data.costInCredits : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="costInCredits" endpoint='updateVehiclesData'/>

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