import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'
import InputSelect from '../InputSelect/InputSelect'

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
    }, []);

    const createCharater = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <p>{data.name}</p>
                        <Input data={{...data}} cb={setData} propertyName="name" endpoint="updateCharacterData"/>

                        <p>{data.homeWorld.name ? data.homeWorld.name : 'Homeworld unknown'}</p>
                        <InputSelect data={{...data}} cb={setData} propertyName="homeWorld" endpoints={{options: 'fetchPlanetsData', update: 'updateCharacterData'}}/>

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
