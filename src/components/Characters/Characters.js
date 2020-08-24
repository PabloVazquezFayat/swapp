import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Input from '../Input/Input'

export default function Characters() {

    const [data, setData] = useState('');

    const getData = async ()=> {
        if(data === ''){
            const results = await fetchData.fetchCharacterDataByID(window.location.href.split('/')[4]);
            setData(results)
        }  
    }

    useEffect(()=>{
        getData();
    }, []);

    const createCharater = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <Input data={{...data}} cb={setData} propertyName="name"/>
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
