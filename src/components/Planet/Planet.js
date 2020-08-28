import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../../components/Input/Input'
import InputLabel from '../../components/InputLabel/InputLabel'

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
                        <InputLabel propertyName='Name' >{data.name ? data.name : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="name" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Rotation Period' >{data.rotationPeriod ? data.rotationPeriod : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="rotationPeriod" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Orbital Period' >{data.orbitalPeriod ? data.orbitalPeriod : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="orbitalPeriod" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Diameter' >{data.diameter ? data.diameter : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="diameter" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Climate' >{data.climate ? data.climate : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="climate" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Gravity' >{data.gravity ? data.gravity : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="gravity" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Terrain' >{data.terrain ? data.terrain : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="terrain" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Surface Water' >{data.surfaceWater ? data.surfaceWater : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="surfaceWater" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Population' >{data.population ? data.population : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="population" endpoint="updatePlanetData"/>
                        
                        <InputLabel propertyName='Image' >{data.imageURL ? data.imageURL : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="imageURL" endpoint="updatePlanetData"/>
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

