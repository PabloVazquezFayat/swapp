import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'
import InputSelect from '../InputSelect/InputSelect'
import InputLabel from '../InputLabel/InputLabel'
import InputSelectMultiple from '../InputSelectMultiple/InputSelectMultiple'
import InputSelectMultipleLabel from '../InputSelectMultipleLabel/InputSelectMultipleLabel'

export default function Characters() {

    const [data, setData] = useState('');

    const getData = async ()=> {
        if(data === ''){
            const characterData = await fetchData.fetchCharacterDataByID(window.location.href.split('/')[4]);
            setData(characterData);
        }  
    }

    useEffect(()=>{
        getData();
    });

    const createCharater = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <InputLabel>{data.name ? data.name : undefined}</InputLabel>
                        <Input data={{...data}} cb={setData} propertyName="name" endpoint="updateCharacterData"/>

                        <InputLabel>{data.homeWorld ? data.homeWorld.name : undefined}</InputLabel>
                        <InputSelect data={{...data}} cb={setData} propertyName="homeWorld" endpoints={{options: 'fetchPlanetsData', update: 'updateCharacterData'}} default='Select Planet'/>

                        <InputLabel>{data.species ? data.species.name : undefined}</InputLabel>
                        <InputSelect data={{...data}} cb={setData} propertyName="species" endpoints={{options: 'fetchSpeciesData', update: 'updateCharacterData'}} default='Select Species'/>

                        <InputSelectMultipleLabel data={{...data}} propertyName="starship" message="No starships found" />
                        <InputSelectMultiple data={{...data}} cb={setData} propertyName="starship" endpoints={{options: 'fetchStarshipsData', update: 'updateCharacterData'}} />

                        <InputSelectMultipleLabel data={{...data}} propertyName="vehicles" message="No vehicles found" />
                        <InputSelectMultiple data={{...data}} cb={setData} propertyName="vehicles" endpoints={{options: 'fetchVehiclesData', update: 'updateCharacterData'}} />

                        <img src={data.imageURL ? data.imageURL : '/imgs/man.png' } alt=''></img>
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
