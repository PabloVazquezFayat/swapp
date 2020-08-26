import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function InputSelect(props) {

    const [options, setOptions] = useState('');
    const [propertyData, setPropertyData] = useState({});

    const getData = async ()=> {
        if(options === ''){
            const response = await fetchData[props.endpoints.options]();
            setOptions(response);
        }
    }

    useEffect(()=> {
        getData();
    }, []);

    const createInputSelect = ()=> {
        if(options){
            return  options.map((opt, i)=> {
                return <option key={i} value={opt._id}>{opt.name}</option>
            })
        }else{
            return <option>Loading...</option>
        }
    }

    const editProperty = async ()=> {

        const newData = {...props.data};
        
        if(propertyData[props.propertyName] !== undefined && propertyData[props.propertyName] !== newData[props.propertyName]){
            newData[props.propertyName] = propertyData[props.propertyName];
            const response = await fetchData[props.endpoints.update](newData);
            props.cb(response);
        }
    }

    return (
        <div>
            <select onChange={(e)=> setPropertyData({[props.propertyName]: e.target.value})}>
                <option>Select Planet</option>
                {createInputSelect()}
            </select>
            <button onClick={editProperty}>save</button>
        </div>
    )
}
