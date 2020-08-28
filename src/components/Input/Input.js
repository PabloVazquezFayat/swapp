import React, { useState } from 'react'
import Alert from '../Alert/Alert'
import fetchData from '../../utils/fetchData'

export default function Input(props) {

    const [propertyData, setPropertyData] = useState({});
    const [alert, setAlert] = useState({status: false, newValue: false});

    const editPropery = async ()=> {

        const newData = props.data;

        if(
            Object.keys(propertyData).length !== 0 && 
            propertyData[Object.keys(propertyData)[0]] !== undefined && 
            propertyData[Object.keys(propertyData)[0]].length > 0 &&
            propertyData[Object.keys(propertyData)[0]] !== newData[Object.keys(propertyData)[0]]
        ){
            newData[Object.keys(propertyData)[0]] = propertyData[Object.keys(propertyData)];
            const res = await fetchData[props.endpoint](newData);
            props.cb(res);
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

    return (
        <div>
            <input type='text' onChange={(e)=> setPropertyData({[props.propertyName]: e.target.value})} placeholder={props.data[props.propertyName]}></input>
            <button onClick={editPropery}>save</button>
            {alert.status === true && alert.newValue === true? <Alert message={`please enter a VALID value`}/> : null}
            {alert.status === true && alert.newValue === false ? <Alert message={`please enter a NEW value`}/> : null}
        </div>
    )
}
