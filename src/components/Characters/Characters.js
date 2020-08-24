import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import Alert from '../Alert/Alert';

export default function Characters() {

    const [data, setData] = useState('');
    const [propertyData, setPropertyData] = useState({});
    const [alert, setAlert] = useState({status: false, newValue: false});

    const getData = async ()=> {
        if(data === ''){
            const results = await fetchData.fetchCharacterDataByID(window.location.href.split('/')[4]);
            setData(results)
        }  
    }

    useEffect(()=>{
        getData();
    }, []);

    const editPropery = async ()=> {

        const newData = {...data};

        if(
            Object.keys(propertyData).length !== 0 && 
            propertyData[Object.keys(propertyData)[0]] !== undefined && 
            propertyData[Object.keys(propertyData)[0]].length > 0 &&
            propertyData[Object.keys(propertyData)[0]] !== newData[Object.keys(propertyData)[0]]
        ){

            newData[Object.keys(propertyData)[0]] = propertyData[Object.keys(propertyData)];

            const res = await fetchData.updateCharacterData(newData);

            setData(res);

            setAlert({status: false, newValue: false});

        }else if(
            Object.keys(propertyData).length !== 0 && 
            propertyData[Object.keys(propertyData)[0]] !== undefined && 
            propertyData[Object.keys(propertyData)[0]].length > 0 &&
            propertyData[Object.keys(propertyData)[0]] === newData[Object.keys(propertyData)[0]]
        ){

            setAlert({status: true, newValue: false});

        }else{

            setAlert({status: true, newValue: true});

        }

    }

    const createCharater = ()=> {
        if(Object.keys(data).length > 0 && data.status === undefined){
            return  <div>
                        <div>
                            <p>{data.name}</p>
                            <input type='text' onChange={(e)=> setPropertyData({name: e.target.value})} placeholder={data.name}></input>
                            <button onClick={editPropery}>save</button>
                            {alert.status === true && alert.newValue === true? <Alert message={`please enter a valid value`}/> : null}
                            {alert.status === true && alert.newValue === false ? <Alert message={`please enter a NEW value`}/> : null}
                        </div>
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
