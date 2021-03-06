import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import PaginationController from '../PaginationController/PaginationController'

export default function InputSelect(props) {

    const [options, setOptions] = useState('');
    const [propertyData, setPropertyData] = useState({});
    const [page, setPage] = useState('1');
    const count = options.count;

    const getData = async ()=> {
        if(options === ''){
            const response = await fetchData[props.endpoints.options]();
            setOptions(response);
        }
    }

    useEffect(()=> {
        getData();
    });

    const createInputSelect = ()=> {
        if(options){
            return  options.data.map((opt, i)=> {
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
                <option>{props.default}</option>
                {createInputSelect()}
            </select>
            <PaginationController cb={{setData:setOptions, setPage: setPage}} page={page} count={count} endpoint={props.endpoints.options}/>
            {props.save && props.save !== false ? <button onClick={editProperty}>save</button>: null}
        </div>
    )
}
