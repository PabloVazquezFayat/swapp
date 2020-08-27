import React, { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchData'

export default function InputSelectMultiple(props) {

    const newData = {...props.data};
    const [options, setOptions] = useState('');
    const [values, setValues] = useState(newData[props.propertyName].map((data)=> data._id))

    const getData = async ()=> {
        if(options === ''){
            const response = await fetchData[props.endpoints.options]();
            setOptions(response.data);
        }
    }

    useEffect(()=> {
        getData();
    });

    const updateValues = (value, checked)=> {
        if(checked === true && values.indexOf(value) === -1){
            const newValues = [...values];
            newValues.push(value);
            setValues(newValues);
        }else if(checked === false && values.indexOf(value) !== -1){
            const newValues = [...values];
            newValues.splice(values.indexOf(value), 1);
            setValues(newValues);
        }
    }

    const updateData = async()=> {
        newData[props.propertyName] = values;
        const response = await fetchData[props.endpoints.update](newData);
        props.cb(response);
    }

    const createOptions = ()=> {
        if(options !== '' && options.status === undefined){
            return options.map((opt, i)=>{
                return  <li key={i}>
                            <label>{opt.name}</label>
                            <input 
                                type='checkbox' 
                                value={opt._id} checked={values.indexOf(opt._id) !== -1 ? true : false} 
                                onChange={(e)=> updateValues(e.target.value, e.target.checked)}
                            />
                        </li>
            });
        }else if(options.status === false){
            return <div>No options found</div>;
        }else{
            return <div>Loading...</div>
        }
    }

    return (
        <div>
            <ul>
                {createOptions()}
            </ul>
            <button onClick={updateData}>save</button>
        </div>
    )
}
